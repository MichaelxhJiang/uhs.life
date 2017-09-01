import { Meteor } from 'meteor/meteor';
import { Posts } from './posts.js';

Meteor.methods({
   'postTextImage' : function(json) {
      let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }
      let errStr = "", err = false;
      if (json.type === "announcement") {
         err = true;
         errStr += "Not an announcement. ";
      }
      if (json.subType === "textOnly") {
         err = true;
         errStr += "Not text first announcement type. ";
      }
      json.meta.approved = false;
      json.meta.screeningStage = 0;

      //adds draft to the Posts collection
      Posts.insert(json, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error(err);
         }
      });
   },
   'postText' : function(json) {
      let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }

      json.meta.approved = false;
      json.meta.screeningStage = 0;

      //adds draft to the Posts collection
      Posts.insert(json, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error(err);
         }
      });
   },
   'postImage' : function(json) {
      let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }

      json.meta.approved = false;
      json.meta.screeningStage = 0;

      //adds draft to the Posts collection
      Posts.insert(json, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error(err);
         }
      });
   },
   'postBlog' : function(json) {
      let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }

      json.meta.approved = false;
      json.meta.screeningStage = 0;

      //adds draft to the Posts collection
      Posts.insert(json, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error(err);
         }
      });
   },
   'getUnapprovedPosts' : function() {
      let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }

      return Posts.find({'meta.approved':false, 'meta.screeningStage': {$ne: -1}});
   },
   'getApprovedPosts' : function() {
      let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }

      return Posts.find({'meta.approved':true, 'meta.screeningStage': 3});
   },
   'getRejectedPosts' : function() {
      let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }

      return Posts.find({'meta.approved':false, 'meta.screeningStage': -1});
   },
   'getPostsByUserId' : function (userId) {
      let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }

      return Posts.find({'authorId': userId});
   },
   'approvePost' : function(postId) {
      let accessLevel = Meteor.users.find({'_id':Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }

      Posts.findOneAndUpdate ({'_id':postId}, { $set: {'meta.approved':true, 'meta.screeningStage':3}}, function (err, obj) {
         if (err) {
            console.log(err);
         } else {
            //Post on twitter
            Meteor.call('setupTwitterAPI', function(err) {
               if(err) {
                  console.log(err);
               } else {
                  Meteor.call('postTextAnnouncementTwitter', obj, function(err) {
                     if (err) {
                        console.log(err);
                     }
                  })
               }
            });
         }
      });
   },
   'unApprovePost' : function (postId) {
      let accessLevel = Meteor.users.find({'_id':Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }

      Posts.findOneAndUpdate ({'_id':postId}, { $set: {'meta.approved':false, 'meta.screeningStage':0}});
   },
   'rejectPost' : function (postId) {
      let accessLevel = Meteor.users.find({'_id':Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }

      Posts.findOneAndUpdate ({'_id':postId}, { $set: {'meta.screeningStage':-1}});
   },
   'unRejectPost' : function (postId) {
      let accessLevel = Meteor.users.find({'_id':Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }

      Posts.findOneAndUpdate ({'_id':postId}, { $set: {'meta.screeningStage': 0}});
   }
});
