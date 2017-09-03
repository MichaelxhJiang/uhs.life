import schedule from 'node-schedule';
import { Posts } from '../../api/posts/posts.js';

Meteor.methods({
   'scheduleAnnouncement' : function(annnouncementId, startDate, endDate) {
      let announcement = Posts.findOne('_id': announcementId);

      if (announcement.type === 'announcement') {
         let sDate = new Date(startDate);
         let eDate = new Date(endDate);
         let cDate = new Date();
         let flag = false;

         if (sDate.getTime() < cDate.getTime()) { //already past start date
            sDate = new Date();  //update the start date
            sDate.setSeconds(sDate.getSeconds() + 5);  //add a delay
         }
         if (eDate.getTime() < cDate.getTime()) { //already past end date
            flag = true;
         }
         if (eDate.getTime() === sDate.getTime()) {   //scheduled for one day
            eDate = new Date(eDate.setTime( eDate.getTime() + 86400000 )); //move end day to next day midnight
         }
         if (!flag) {
            let j = schedule.schedulateJob(sDate, function() {
               //Set display to TRUE
               Posts.findOneAndUpdate({'_id': announcementId}, { $set: {'display':true}});
            });
            let k = schedule.scheduleJob(eDate, function() {
               //Set display to FALSE
               Posts.findOneAndUpdate({'_id': announcementId}, { $set: {'display':false}});
            });
         }
      } else {
         console.log('Not an announcement');
         return -1;
      }
   },
   'scheduleBlog' : function(blogId, releaseDate, function() {
      let blog = Posts.findOne('_id':blogId);
      if (blog.type === 'blog') {
         let rDate = new Date(releaseDate);
         let cDate = new Date();

         if (rDate.getTime() < cDate.getTime()) { //already past start date
            rDate = new Date();  //update the start date
            rDate.setSeconds(rDate.getSeconds() + 5);  //add a delay
         }

         let j = schedule.schedulateJob(rDate, function() {
            //Set display to TRUE
            Posts.findOneAndUpdate({'_id': blogId}, { $set: {'display':true}});
         });
      } else {
         console.log('not a blog');
         return -1;
      }
   })
})
