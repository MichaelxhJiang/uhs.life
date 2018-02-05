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
        console.log("Announcement Requested By", this.userId);
        let userLevel = '1';
        if(Roles.userIsInRole(this.userId, 'student')){
            userLevel = '2';
        }else if(Roles.userIsInRole(this.userId, ['teacher', 'admin'])){
            userLevel = '3';
        }
        return Posts.find({
            'type': 'announcement',
            'meta.approved': true,
            'meta.display': true,
            $or: [{
                'meta.visibility': '1'
            }, {
                'meta.visibility': userLevel
            }]
        }, {
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
    });
}

Meteor.methods({
    'posts.removeAll' : function() {
        throw new Meteor.Error(403, "No, just no.");
        //Posts.remove({});
    },
    'posts.submit': function (json) {
        if (!Roles.userIsInRole( this.userId, ['teacher','admin','announcementEditor'])) {
            throw new Meteor.Error(403, "You do not have permission to execute the following action.");
        }
        let errStr = "", err = false;
        if (json.type === "announcement") {
            if (json.subType === "video") {
                if (!json.headline) {
                    err = true;
                    errStr += "Missing headline. ";
                }
                if (!json.imgId && !json.videoId && !json.content) {
                    err = true;
                    errStr += "Missing Content. ";
                }
                let sDate = new Date(json.startDate),
                    eDate = new Date(json.endDate),
                    currentDate = new Date();
                if(sDate.getTime() < currentDate.getTime() || currentDate.getTime() > eDate.getTime() || sDate.getTime() > eDate.getTime()){
                    err = true;
                    errStr = "Your date selection will break our system. ";
                }
            } else if (json.subType === "textOnly") {
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
            } else if (json.subType === "imageOnly") {
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
            } else if (json.subType === "imageText") {
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
                if (!json.imgId) {
                    err = true;
                    errStr += "Missing image. ";
                }
                let sDate = new Date(json.startDate),
                    eDate = new Date(json.endDate),
                    currentDate = new Date();
                if(sDate.getTime() < currentDate.getTime() || currentDate.getTime() > eDate.getTime() || sDate.getTime() > eDate.getTime()){
                    err = true;
                    errStr = "Your date selection is illegal. ";
                }
            }

        } else if(json.type === 'blog'){
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
                errStr = "Your date selection will break our system. ";
            }
        }
        if (err) {
            throw new Meteor.Error(400, errStr);
        }
        json.meta.approved = false;
        json.meta.screeningStage = 0;
        json.meta.display = false;
        Posts.insert(json, function(err, content) {
            if(err) {
                console.error(err);
            }
        });

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
        if (!json.imgId) {
            err = true;
            errStr += "Missing image. ";
        }
        let sDate = new Date(json.startDate),
            eDate = new Date(json.endDate),
            currentDate = new Date();
        if(sDate.getTime() < currentDate.getTime() || currentDate.getTime() > eDate.getTime() || sDate.getTime() > eDate.getTime()){
            err = true;
            errStr = "Your date selection is illegal. ";
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
            errStr = "Your date selection is illegal. ";
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
    'posts.updatePost': function (postId, newContent) {
        const post = Posts.findOne({_id: postId});
        if(!Roles.userIsInRole( this.userId, ['admin']) || post.author !== this.userId){
            throw new Meteor.Error(403, "You do not have permission to do so.");
        }
        Posts.update({_id: postId}, {'$set': newContent});
    },
    'posts.removePost': function (postId) {
        if (!Roles.userIsInRole( this.userId, ['teacher','admin','blogEditor'])) {
            throw new Meteor.Error(403, "You do not have permission to do so.");
        }
        const algoliaId = Posts.findOne({_id: postId}).meta.algoliaId;
        Meteor.call("removeAnnouncement", algoliaId);
        Posts.remove({_id: postId});
    },
    'posts.approvePost' : function(postId) {
        if (!Roles.userIsInRole( this.userId, ['admin'])) {
            throw new Meteor.Error(403, "You do not have permission to do so.");
        }
        Posts.update({'_id':postId}, { $set: {'meta.approved':true, 'meta.screeningStage':3}}, function (err, response) {
            if (err) {
                console.log(err);
            } else {
                let obj = Posts.findOne({'_id':postId});
                let type = obj.type, subType = obj.subType;
                //send notification to author to inform post is approved
                let userId = Posts.findOne({_id:userId}).author;
                Meteor.call("userNotification", userId, "Post Approved", "");
                //schedule announcement to display
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
        if (!Roles.userIsInRole( this.userId, ['admin'])) {
            throw new Meteor.Error(403, "You do not have permission to do so.");
        }

        Posts.findOneAndUpdate ({'_id':postId}, { $set: {'meta.approved':false, 'meta.screeningStage':0, 'display': false}});
    },
    'posts.rejectPost' : function (postId, reason) {
        if (!Roles.userIsInRole( this.userId, ['admin'])) {
            throw new Meteor.Error(403, "You do not have permission...Reported");
        }
        //remove from algolia
        let algoliaId = Posts.findOne({_id:postId}).meta.algoliaId;
        if (algoliaId) {
            Meteor.call("removeAnnouncement", algoliaId);
        }
        //notify author of post for reason of rejection
        let userId = Posts.findOne({_id:postId}).author;
        Meteor.call("userNotification", userId, "Post Rejected", reason);
        //update meta data of post
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
