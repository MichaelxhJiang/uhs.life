import { Meteor } from 'meteor/meteor';

Accounts.onCreateUser(function (options, user) {
   Meteor.users.remove('PJbHeQKoAaLwgu7uB');
   console.log(JSON.stringify(user, null, 2));
   return user;
});
