import {Meteor} from 'meteor/meteor';

import '/imports/startup/server'

import {Posts} from '../imports/api/posts/posts.js';

Meteor.startup(() => {
    Accounts.loginServiceConfiguration.remove({
        service: "google"
    });
    Accounts.loginServiceConfiguration.insert({
        service: "google",
        clientId: "152156454960-h8olc9vhu7juk77p71et1aekkr6qslm1.apps.googleusercontent.com",
        secret: "nL2ZzKMfrfwja7VHa9jmlhvU"
    });
//on server restart, always re-run scheduler to reschedule all announcements
//TODO
    Posts.find({'meta.approved': true, 'meta.screeningStage': 3}).forEach(function (obj) {
        Meteor.call('scheduleAnnouncement', obj._id, function (err, res) {
            if (err) {
                console.log(err);
            }
        });
    });
    /*
    Meteor.call('posts.getApprovedPosts', function(err, data) {
    console.log("getting approved posts");
    if (err) {
    console.log (err);
    } else {
    //console.log(data);
    data.forEach(function(obj) {
    Meteor.call('scheduleAnnouncement', obj._id, function(err, res) {
    if (err) {
    console.log(err);
    }
    });
    });
    }
    })*/
});
