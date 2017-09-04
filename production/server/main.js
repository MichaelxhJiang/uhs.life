import { Meteor } from 'meteor/meteor';

import '/imports/startup/server'

Meteor.startup(() => {
/*     Accounts.loginServiceConfiguration.remove({
        service: "google"
    });
    Accounts.loginServiceConfiguration.insert({
        service: "google",
        clientId: "152156454960-h8olc9vhu7juk77p71et1aekkr6qslm1.apps.googleusercontent.com",
        secret: "nL2ZzKMfrfwja7VHa9jmlhvU"
    });*/

    //on server restart, always re-run scheduler to reschedule all announcements
    //TODO

    Meteor.call('posts.getApprovedPosts', function(err, data) {
      for (let i = 0; i < data.length; i++) {
         Meteor.call(scheduleAnnouncement, data[i]._id, function(err) {
            if (err) {
               console.log(err);
            }
         })
      }
   })
   
});
