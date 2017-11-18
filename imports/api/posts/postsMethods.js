import { Meteor } from 'meteor/meteor';
import { Posts } from './posts.js';

if (Meteor.isServer) {
    Meteor.publish('posts', function postsPublication() {
        if (this.userId) {
            console.log(this.userId);
            return Posts.find({});
        }
    });
    Meteor.publish('announcements', function announcementsPublication(limit) {
        let userLevel = '1';
        if(Roles.userIsInRole(this.userId, 'student')){
            userLevel = '2';
        }else if(Roles.userIsInRole(this.userId, ['teacher', 'admin'])){
            userLevel = '3';
        }
        return Posts.find({
            'type': 'announcement',
            'meta.approved': true,
            $or: [{
                'meta.visibility': '1'
            },{
                'meta.visibility': userLevel
            }]
        },{
            limit: limit
        });
    });
    Meteor.publish('blogs', function blogsPublication(limit) {
        return Posts.find({
            'type': 'blog'
        },{
            limit: limit
        });
    });
    Meteor.publish('postsByCourse', function (code, limit) {
        return Posts.find({
            'type': 'blog',
            'organizationsValues': code
        },{
            limit: limit
        });
    });
    Meteor.publish('postsByUser', function (limit) {
        return Posts.find({
            'author': this.userId
        }, {
            limit: limit
        });
    })
}

Meteor.methods({
    'posts.removeAll' : function() {
        throw new Meteor.Error(403, "No, just no.");
        //Posts.remove({});
    },
    'posts.postTextImage' : function(json) {
        if (!Roles.userIsInRole( this.userId, ['teacher','admin','announcementEditor'])) {
            throw new Meteor.Error(403, "You do not have permission to execute the following action.");
        }
        let errStr = "", err = false;
        if (json.type !== "announcement") {
            err = true;
            errStr += "Not an announcement. ";
        }
        if (json.subType !== "imageText") {
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
        console.log(json.imgId);
        if (!json.imgId) {
            err = true;
            errStr += "Missing image. ";
        }
        let sDate = new Date(json.startDate),
            eDate = new Date(json.endDate),
            currentDate = new Date();
        if(sDate.getTime() < currentDate.getTime() || currentDate.getTime() > eDate.getTime() || sDate.getTime() > eDate.getTime()){
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
        if (!Roles.userIsInRole( this.userId, ['teacher','admin','announcementEditor'])) {
            throw new Meteor.Error(403, "You do not have permission...Reported");
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
        if(sDate.getTime() < currentDate.getTime() || currentDate.getTime() > eDate.getTime() || sDate.getTime() > eDate.getTime()){
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
        if (!Roles.userIsInRole( this.userId, ['teacher','admin','announcementEditor'])) {
            throw new Meteor.Error(403, "You do not have permission...Reported");
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
        if(sDate.getTime() < currentDate.getTime() || currentDate.getTime() > eDate.getTime() || sDate.getTime() > eDate.getTime()){
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
        if (!Roles.userIsInRole( this.userId, ['teacher','admin','blogEditor'])) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
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
    'posts.getPostById' : function(id) {
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }
        return Posts.findOne({'_id':id});
    },
    'posts.getDisplayPosts' : function() {
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }

        return Posts.find({'meta.approved':true, 'display': true}).fetch();
    },
    'posts.getUnapprovedPosts' : function() {
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }

        return Posts.find({'meta.approved':false, 'meta.screeningStage': {$ne: -1}}).fetch();
    },
    'posts.getApprovedPosts' : function() {
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }

        return Posts.find({'meta.approved':true, 'meta.screeningStage': 3}).fetch();
    },
    'posts.getRejectedPosts' : function() {
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }

        return Posts.find({'meta.approved':false, 'meta.screeningStage': -1}).fetch();
    },
    'posts.getPostsByUserId' : function (userId) {
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }

        return Posts.find({'authorId': userId}).fetch();
    },
    'posts.removePost': function (postId) {
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }
        var algoliaId = Posts.find({_id:postId}).meta.algoliaId;
        Meteor.call("removeAnnouncement", algoliaId);
        Posts.remove({_id: postId});
    },
    'posts.approvePost' : function(postId) {
        if (!Roles.userIsInRole( this.userId, ['admin'])) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }

        Posts.update({'_id':postId}, { $set: {'meta.approved':true, 'meta.screeningStage':3}}, function (err, response) {
            if (err) {
                console.log(err);
            } else {
                let obj = Posts.findOne({'_id':postId});
                let type = obj.type, subType = obj.subType;

                Meteor.call('postAndScheduleAnnouncement', postId, function(err) {
                    if (err) {
                        console.log(err);
                    }
                });
                /*
                if (type === 'announcement') {
                    if (subType === 'textOnly') {
                        Meteor.call('postTextAlgolia', postId);
                    } else if (subType === 'imageOnly') {
                        Meteor.call('postImageAlgolia', postId);
                    } else {
                        Meteor.call('postTextImageAlgolia', postId);
                    }
                } else {
                    Meteor.call('postBlogAlgolia', postId);
                }

                //Post on twitter
                Meteor.call('setupTwitterAPI', function(err, response) {
                    if(err) {
                        console.log(err);
                    } else {

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
                });*/
            }
        });
    },
    'posts.unApprovePost' : function (postId) {
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }

        Posts.findOneAndUpdate ({'_id':postId}, { $set: {'meta.approved':false, 'meta.screeningStage':0, 'display': false}});
    },
    'posts.rejectPost' : function (postId, reason) {
        if (!Roles.userIsInRole( this.userId, ['admin'])) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }

        var algoliaId = Posts.findOne({_id:postId}).meta.algoliaId;
        if (algoliaId) {
            Meteor.call("removeAnnouncement", algoliaId);
        }
        Posts.update ({'_id':postId}, { $set: {'meta.approved':false, 'meta.screeningStage': -1, 'meta.rejectedReason': reason}});
    },
    'posts.unRejectPost' : function (postId) {
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }

        Posts.findOneAndUpdate ({'_id':postId}, { $set: {'meta.screeningStage': 0}});
    }
});
