import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
});

Accounts.onCreateUser(function (options, user) {
   //console.log(JSON.stringify(user, null, 2));
   return user;
});
