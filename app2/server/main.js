import { Meteor } from 'meteor/meteor';
import { TestCollection } from '/imports/api/testCollection.js';
import '/imports/startup/server';
import schedule from 'node-schedule';

Meteor.startup(() => {
   //testing node schedule
   console.log("initializing scheduler");
   var rule = new schedule.RecurrenceRule();
   rule.second = new schedule.Range(0, 59, 2);
   var k = schedule.scheduleJob(rule, function(err) {
      if (err) {
         console.log(err);
      } else {
         console.log(new Date());
      }
   });
   var j = schedule.scheduleJob('*/1 * * * *', function(err) {
      if (err) {
         console.log(err);
      } else {
         console.log(TestCollection.find());
         k.cancel();
      }
   });

})
