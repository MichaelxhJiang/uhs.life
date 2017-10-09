import { Meteor } from 'meteor/meteor';
import schedule from 'node-schedule';
import { Posts } from '../../api/posts/posts.js';

Meteor.methods({
   'scheduleAnnouncement' : function(announcementId) {
      let announcement = Posts.findOne({'_id': announcementId});

      if (announcement.type === 'announcement') {
         let sDate = new Date(announcement.startDate);
         let eDate = new Date(announcement.endDate);
         let cDate = new Date();
         let flag = false;

         sDate.setHours(8);
         eDate.setHours(8);

         if (eDate.getTime() === sDate.getTime()) {   //scheduled for one day
            eDate = new Date(eDate.setTime( eDate.getTime() + 86400000 )); //move end day to next day midnight
         }
         if (sDate.getTime() < cDate.getTime()) { //already past start date
             console.log("updated start date");
            sDate = new Date();  //update the start date
            sDate.setSeconds(sDate.getSeconds() + 5);  //add a delay
         }
         if (eDate.getTime() < cDate.getTime()) { //already past end date
             console.log("updated end date");
            flag = true;
         }


         if (!flag) {
            let j = schedule.scheduleJob(sDate, Meteor.bindEnvironment(function() {
               //Set display to TRUE
               console.log("DISPLAY TRUE");
               Posts.update({'_id': announcementId}, { $set: {'meta.display':true}});
           }));
            let k = schedule.scheduleJob(eDate, Meteor.bindEnvironment(function() {
               //Set display to FALSE
               console.log("DISPLAY FALSE");
               Posts.update({'_id': announcementId}, { $set: {'meta.display':false}});
            }));
         }
      } else {
         console.log('Not an announcement');
         return -1;
     }
   },
   'scheduleBlog' : function(blogId) {
      let blog = Posts.findOne({'_id':blogId});

      if (blog.type === 'blog') {
         let rDate = new Date(blog.releaseDate);
         let cDate = new Date();

         if (rDate.getTime() < cDate.getTime()) { //already past start date
            rDate = new Date();  //update the start date
            rDate.setSeconds(rDate.getSeconds() + 5);  //add a delay
         }

         let j = schedule.scheduleJob(rDate, Meteor.bindEnvironment(function() {
            //Set display to TRUE
            Posts.update({'_id': blogId}, { $set: {'meta.display':true}});
        }));
      } else {
         console.log('not a blog');
         return -1;
      }
   }
});
