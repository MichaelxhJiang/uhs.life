import { Meteor } from 'meteor/meteor';

Accounts.onCreateUser(function (options, user) {
   console.log(JSON.stringify(user, null, 2));
   const email = user.services.google.email;
   if (email.indexOf("gapps.yrdsb.ca") !== -1) {
      //check for teacher or student
      var hasNumbers = email.match(/\d+/g);
      if (hasNumbers) {
          console.log('student');
      } else {
         console.log('teacher');
      }
   } else {
      console.log('not gapps yrdsb account');
      throw Meteor.error(403, "NAGA");
   }
   return user;
});
