import { Meteor } from 'meteor/meteor';

const Banned = new Mongo.Collection('blacklist');

Meteor.users.allow({
   update: function () {
       return true;
   },
    remove: function () {
        return true;
    }
});

if(Meteor.isServer){
    Meteor.publish('allUsers', function usersPublication() {
        return Meteor.users.find({});
    });
    Meteor.publish('theUser', function theUserPublication() {
        return Meteor.users.find({_id: this.userId})
    });
    Meteor.publish('allUsersLite', function usersLitePublication() {
        return Meteor.users.find({},{
            'services.google.picture': 1,
            'services.google.name': 1
        });
    });
}

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
    if (!user.profile) {
        user.profile = {
            init: false,
            teacher: false
        };
        user.private = {
            courses: null,
            token: null
        }
    }
    const email = user.services.google.email;
    const hasNumbers = email.match(/\d+/g);
    if (!hasNumbers) {
        user.profile.teacher = true;
    }
    return user;
});
Accounts.validateLoginAttempt(function (info) {
    let status = true;
    try{
        status = !Roles.userIsInRole(info.user._id, 'banned')
    }catch(e){
        status = true;
    }
    console.log(status);
    if(!status){
        throw new Meteor.Error(403, "Sorry you have been banned from uhs.life by the administration for the following reason: ")
    }
    return true;
});
Meteor.methods({
    'initUserProfile': function (id,info) {
        Meteor.users.update({_id: id}, {$set: {"profile.init": true}});
        Meteor.users.update({_id: id}, {$set: {"profile.terms": true}});
    },
    'addUserToRole': function (userId, roles) {
        Roles.setUserRoles(userId, roles);
    },
    'accounts.setPersonalEmail': function (email) {
        Meteor.users.update({_id: this.userId}, {$set: {"profile.email": email}});
    },
    'accounts.initRoles': function () {
        const user = Meteor.users.findOne({_id: this.userId});
        const email = user.services.google.email;
        const hasNumbers = email.match(/\d+/g);
        if (hasNumbers) {
            Roles.addUsersToRoles(this.userId,['student']);
        } else {
            Roles.addUsersToRoles(this.userId,['teacher'])
        }
    },
    'accounts.ban': function (id,reason) {
        if(!Roles.userIsInRole(this.userId,'admin')){
            throw new Meteor.Error(403, "You do not have the power to ban a user.")
        }
        Meteor.users.update({_id: id},{$set: {'private.bannedReason':reason}});
        Roles.addUsersToRoles(id, 'banned');
    }
});