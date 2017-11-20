import {Meteor} from 'meteor/meteor';
import schedule from 'node-schedule';
import {Posts} from '../../api/posts/posts.js';

Meteor.methods({
    //call this for scheduling an announcement or rescheduling after server reset
    'scheduleAnnouncement': function (announcementId) {
        let announcement = Posts.findOne({'_id': announcementId});

        if (announcement.type === 'announcement') {
            let sDate = new Date(announcement.startDate);
            let eDate = new Date(announcement.endDate);
            let cDate = new Date();
            let flag = false;

            sDate.setHours(8);
            eDate.setHours(8);

            if (eDate.getTime() === sDate.getTime()) {   //scheduled for one day
                eDate = new Date(eDate.setTime(eDate.getTime() + 86400000)); //move end day to next day midnight
            }
            if (sDate.getTime() < cDate.getTime()) { //already past start date
                console.log("updated start date");
                sDate = new Date();  //update the start date
                sDate.setSeconds(sDate.getSeconds() + 5);  //add a delay
            }
            if (eDate.getTime() < cDate.getTime()) { //already past end date
                console.log("updated end date");
                Posts.update({'_id': announcementId}, {$set: {'meta.display': false}});
                flag = true;
            }


            if (!flag) {
                let j = schedule.scheduleJob(sDate, Meteor.bindEnvironment(function () {
                    //Set display to TRUE
                    console.log("DISPLAY TRUE");
                    Posts.update({'_id': announcementId}, {$set: {'meta.display': true}});
                }));
                let k = schedule.scheduleJob(eDate, Meteor.bindEnvironment(function () {
                    //Set display to FALSE
                    console.log("DISPLAY FALSE");
                    Posts.update({'_id': announcementId}, {$set: {'meta.display': false}});
                }));
            }
        } else {
            console.log('Not an announcement');
            return -1;
        }
    },
    //only call this method when approving a new post
    //as it posts to Twitter, algolia, and pushes notification on start date
    'postAndScheduleAnnouncement' : function (announcementId) {
        Meteor.call('scheduleAnnouncement', announcementId);

        let announcement = Posts.findOne({'_id': announcementId});

        if (announcement.type === 'announcement') {
            let sDate = new Date(announcement.startDate);
            let cDate = new Date();

            let subType = announcement.subType;

            sDate.setHours(8);

            if (sDate.getTime() < cDate.getTime()) { //already past start date
                console.log("updated start date");
                sDate = new Date();  //update the start date
                sDate.setSeconds(sDate.getSeconds() + 5);  //add a delay
            }
            
            //set the scheduler
            let j = schedule.scheduleJob(sDate, Meteor.bindEnvironment(function () {
                //Set display to TRUE
                console.log("DISPLAY TRUE AND SEND TO TWITTER");
                Posts.update({'_id': announcementId}, {$set: {'meta.display': true}});
                
                if (subType === 'textOnly') {
                    Meteor.call('postTextAlgolia', announcementId);
                } else if (subType === 'imageOnly') {
                    Meteor.call('postImageAlgolia', announcementId);
                } else {
                    Meteor.call('postTextImageAlgolia', announcementId);
                }

                //Post on twitter
                Meteor.call('setupTwitterAPI', function(err, response) {
                    if(err) {
                        console.log(err);
                    } else {
                        if (subType === 'textOnly') {
                            Meteor.call('postTextAnnouncementTwitter', announcement, function(err) {
                                if (err) {
                                    console.log(err);
                                }
                            });
                        } else if (subType === 'imageOnly') {
                            Meteor.call('postImageAnnouncementTwitter', announcement, function(err) {
                                if (err) {
                                    console.log(err);
                                }
                            });
                        } else {
                            Meteor.call('postTextImageAnnouncementTwitter', announcement, function(err) {
                                if (err) {
                                    console.log(err);
                                }
                            });
                        }
                    
                    }
                });

                //Push a notification
                Meteor.call('postNotification', announcementId, function(err, response) {
                    if (err) {
                        console.log("Push notification error: " + err);
                    } else {
                        console.log(response);
                    }
                })
            }));
        } else {
            console.log('Not an announcement');
            return -1;
        }
    },
    'postAndScheduleAnnouncementTEST' : function (announcementId) {
        Meteor.call('scheduleAnnouncement', announcementId);

        let announcement = Posts.findOne({'_id': announcementId});

        if (announcement.type === 'announcement') {
            let sDate = new Date(announcement.startDate);

            let subType = announcement.subType;

            sDate = new Date();  //update the start date
            sDate.setSeconds(sDate.getSeconds() + 10);  //add a delay

            //set the scheduler
            let j = schedule.scheduleJob(sDate, Meteor.bindEnvironment(function () {
                //Set display to TRUE
                console.log("DISPLAY TRUE AND SEND TO TWITTER");
                Posts.update({'_id': announcementId}, {$set: {'meta.display': true}});

                if (subType === 'textOnly') {
                    Meteor.call('postTextAlgolia', announcementId);
                } else if (subType === 'imageOnly') {
                    Meteor.call('postImageAlgolia', announcementId);
                } else {
                    Meteor.call('postTextImageAlgolia', announcementId);
                }

                //Post on twitter
                Meteor.call('setupTwitterAPI', function(err, response) {
                    if(err) {
                        console.log(err);
                    } else {
                        if (subType === 'textOnly') {
                            Meteor.call('postTextAnnouncementTwitter', announcement, function(err) {
                                if (err) {
                                    console.log(err);
                                }
                            });
                        } else if (subType === 'imageOnly') {
                            Meteor.call('postImageAnnouncementTwitter', announcement, function(err) {
                                if (err) {
                                    console.log(err);
                                }
                            });
                        } else {
                            Meteor.call('postTextImageAnnouncementTwitter', announcement, function(err) {
                                if (err) {
                                    console.log(err);
                                }
                            });
                        }

                    }
                });
            }));
        } else {
            console.log('Not an announcement');
            return -1;
        }
    },
    'scheduleBlog': function (blogId) {
        let blog = Posts.findOne({'_id': blogId});

        if (blog.type === 'blog') {
            let rDate = new Date(blog.releaseDate);
            let cDate = new Date();

            if (rDate.getTime() < cDate.getTime()) { //already past start date
                rDate = new Date();  //update the start date
                rDate.setSeconds(rDate.getSeconds() + 5);  //add a delay
            }

            let j = schedule.scheduleJob(rDate, Meteor.bindEnvironment(function () {
                //Set display to TRUE
                Posts.update({'_id': blogId}, {$set: {'meta.display': true}});
                Meteor.call('postBlogAlgolia', blogId);
            }));
        } else {
            console.log('not a blog');
            return -1;
        }
    }
});
