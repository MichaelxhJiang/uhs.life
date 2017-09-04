import { Meteor } from 'meteor/meteor';
import { Posts } from './posts.js';

if (Meteor.isServer) {
   Meteor.publish('posts', function postsPublication() {
    return Posts.find();
  });
}

Meteor.methods({
    'posts.postTextImage' : function(json) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }
        let errStr = "", err = false;
        if (json.type !== "announcement") {
            err = true;
            errStr += "Not an announcement. ";
        }
        if (json.subType !== "textImage") {
            err = true;
            errStr += "Not correct announcement type. ";
        }
        if (!json.headline) {
            err = true;
            errStr += "Missing headline. ";
        }
        if (!json.content) {
            err = true;
            errStr += "Missing content. ";
        }
        if (!json.imgId) {
            err = true;
            errStr += "Missing image. ";
        }
        let sDate = new Date(json.startDate),
            eDate = new Date(json.endDate),
            currentDate = new Date();
        if(sDate < currentDate || currentDate > eDate || sDate > eDate){
            err = true;
            errStr = "Your date selection is illegal. "
        }
        if (err) {
            throw new Meteor.Error(400, errStr);
        }
        json.meta.approved = false;
        json.meta.screeningStage = 0;
        json.meta.display = false;

        //adds draft to the Posts collection
        Posts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });

    },
    'posts.postText' : function(json) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        let errStr = "", err = false;
        if (json.type !== "announcement") {
            err = true;
            errStr += "Not an announcement. ";
        }
        if (json.subType !== "textOnly") {
            err = true;
            errStr += "Not correct announcement type. ";
        }
        if (!json.headline) {
            err = true;
            errStr += "Missing headline. ";
        }
        if (!json.content) {
            err = true;
            errStr += "Missing content. ";
        }
        let sDate = new Date(json.startDate),
            eDate = new Date(json.endDate),
            currentDate = new Date();
        if(sDate < currentDate || currentDate > eDate || sDate > eDate){
            err = true;
            errStr = "Your date selection is illegal. "
        }
        if (err) {
            throw new Meteor.Error(400, errStr);
        }

        json.meta.approved = false;
        json.meta.screeningStage = 0;
        json.meta.display = false;

        //adds draft to the Posts collection
        Posts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });
    },
    'posts.postImage' : function(json) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        let errStr = "", err = false;
        if (json.type !== "announcement") {
            err = true;
            errStr += "Not an announcement. ";
        }
        if (json.subType !== "imageOnly") {
            err = true;
            errStr += "Not correct announcement type. ";
        }
        console.log(json.headline);
        if (!json.headline) {
            err = true;
            errStr += "Missing headline. ";
        }
        if (!json.imgId) {
            err = true;
            errStr += "Missing image. ";
        }
        let sDate = new Date(json.startDate),
            eDate = new Date(json.endDate),
            currentDate = new Date();
        if(sDate < currentDate || currentDate > eDate || sDate > eDate){
            err = true;
            errStr = "Your date selection is illegal. "
        }
        if (err) {
            throw new Meteor.Error(400, errStr);
        }

        json.meta.approved = false;
        json.meta.screeningStage = 0;
        json.meta.display = false;

        //adds draft to the Posts collection
        Posts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });
    },
    'posts.postBlog' : function(json) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        let errStr = "", err = false;
        if (json.type !== "blog") {
            err = true;
            errStr += "Not a blog. ";
        }
        if (!json.title) {
            err = true;
            errStr += "Missing title. ";
        }
        if (!json.subtitle) {
            err = true;
            errStr += "Missing subtitle. ";
        }
        if (!json.content) {
            err = true;
            errStr += "Missing content. ";
        }
        if (!json.imgId) {
            err = true;
            errStr += "Missing image. ";
        }
        let sDate = new Date(json.releaseDate),
            currentDate = new Date();
        if(sDate < currentDate){
            err = true;
            errStr = "Your date selection is illegal. "
        }
        if (err) {
            throw new Meteor.Error(400, errStr);
        }

        json.meta.approved = false;
        json.meta.screeningStage = 0;
        json.meta.display = false;

        //adds draft to the Posts collection
        Posts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });
    },
    'posts.getDisplayPosts' : function() {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        return Posts.find({'meta.approved':true, 'display': true});
    },
    'posts.getUnapprovedPosts' : function() {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        return Posts.find({'meta.approved':false, 'meta.screeningStage': {$ne: -1}});
    },
    'posts.getApprovedPosts' : function() {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        return Posts.find({'meta.approved':true, 'meta.screeningStage': 3});
    },
    'posts.getRejectedPosts' : function() {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        return Posts.find({'meta.approved':false, 'meta.screeningStage': -1});
    },
    'posts.getPostsByUserId' : function (userId) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        return Posts.find({'authorId': userId});
    },
    'posts.approvePost' : function(postId) {
        let accessLevel = Meteor.users.find({'_id':Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        Posts.findOneAndUpdate ({'_id':postId}, { $set: {'meta.approved':true, 'meta.screeningStage':3}}, function (err, obj) {
            if (err) {
                console.log(err);
            } else {
               Meteor.call('scheduleAnnouncement', postId, function(err) {
                  if (err) {
                     console.log(err);
                  }
               });

                //Post on twitter
                Meteor.call('setupTwitterAPI', function(err) {
                    if(err) {
                        console.log(err);
                    } else {
                       let type = Posts.findOne({'_id':postId}).type, subType = Posts.findOne({'_id':postId}).subType;
                       if (type === 'announcement') {
                          if (subType === 'textOnly') {
                              Meteor.call('postTextAnnouncementTwitter', obj, function(err) {
                                  if (err) {
                                      console.log(err);
                                  }
                              });
                           } else if (subType === 'imageOnly') {
                              Meteor.call('postImageAnnouncementTwitter', obj, function(err) {
                                  if (err) {
                                      console.log(err);
                                  }
                              });
                           } else {
                              Meteor.call('postTextImageAnnouncementTwitter', obj, function(err) {
                                  if (err) {
                                      console.log(err);
                                  }
                              });
                           }
                        }  else {
                           console.log('This post is not announcement');
                           return -1;
                        }
                    }
                });
            }
        });
    },
    'posts.unApprovePost' : function (postId) {
        let accessLevel = Meteor.users.find({'_id':Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        Posts.findOneAndUpdate ({'_id':postId}, { $set: {'meta.approved':false, 'meta.screeningStage':0, 'display': false}});
    },
    'posts.rejectPost' : function (postId) {
        let accessLevel = Meteor.users.find({'_id':Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        Posts.findOneAndUpdate ({'_id':postId}, { $set: {'meta.screeningStage':-1}});
    },
    'posts.unRejectPost' : function (postId) {
        let accessLevel = Meteor.users.find({'_id':Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        Posts.findOneAndUpdate ({'_id':postId}, { $set: {'meta.screeningStage': 0}});
    }
});
