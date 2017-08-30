import { Meteor } from 'meteor/meteor';

Accounts.validateNewUser(function (user) {
    const email = user.services.google.email;
    if (email.indexOf("gapps.yrdsb.ca") !== -1) {
        //check for teacher or student
        return true;

    } else {
        console.log('not gapps yrdsb account');
        throw new Meteor.Error(403, "Currently uhs.life is only available to YRDSB GAPPS users, stay tuned for parental support!");
    }
});

Accounts.onCreateUser(function (options,user){
   console.log('account created');
    if (user.profile == undefined) user.profile = {};
    _.extend(user, { init: false });
/*    const email = user.services.google.email;
    const hasNumbers = email.match(/\d+/g);
    if (hasNumbers) {
        console.log('student');

    } else {
        console.log('teacher');
    }*/
    return user;
});