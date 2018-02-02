import { Meteor } from 'meteor/meteor';

const Banned = new Mongo.Collection('blacklist');

if(Meteor.isServer){
    Meteor.publish('allUsers', function usersPublication() {
        return Meteor.users.find({},{
            fields: {'private':0}
        });
    });
    Meteor.publish('theUser', function theUserPublication() {
        return Meteor.users.find({_id: this.userId});
    });
    Meteor.publish('allUsersLite', function usersLitePublication() {
        return Meteor.users.find({},{
            fields: {'private':0}
        });
    });
}
Accounts.config({
    restrictCreationByEmailDomain: 'gapps.yrdsb.ca'
});
Accounts.validateNewUser(function (user) {
    console.log("validating new user");
    const email = user.services.google.email;
    if (email.indexOf("gapps.yrdsb.ca") !== -1 || email === "uhslifeofficial@gmail.com" || email === "wuonlabs@gmail.com") {
        console.log("validatedNewUser:", email);
    } else {
        console.log('not gapps yrdsb account', email);
        throw new Meteor.Error(403, "Currently uhs.life is only available to YRDSB GAPPS users, stay tuned for parental support!");
    }
    return true;
});

Accounts.onCreateUser(function (options,user){
    console.log("creating user");
    if (!user.profile) {
        user.profile = {
            init: false,
            teacher: false
        };
        user.private = {
            courses: null,
            token: null
        };
    }
    const email = user.services.google.email;
    const tester = email.substring(0, email.indexOf("@"));
    const hasNumbers = tester.match(/\d+/g);
    if (!hasNumbers) {
        user.profile.teacher = true;
    }
    return user;
});
Accounts.validateLoginAttempt(function (info) {
    if(info.user){
        console.log("User just logged in:", info.user._id);
        if(Roles.userIsInRole(info.user._id, 'banned')){
            console.log('ban detected');
            throw new Meteor.Error(403, "Sorry you have been banned from uhs.life by the administration for the following reason: " + info.user.private.ban.reason);
        }else{
            console.log('login attempt valid');
        }
        return true;
    }else{
        throw new Meteor.Error(403, "Currently uhs.life is only available to YRDSB GAPPS users, stay tuned for parental support!");
    }
});
Meteor.methods({
    'initUserProfile': function (id,info) {
        if(info.length > 25){
            throw new Meteor.Error(400, "Your Tagline is too long, please shorten it.");
        }
        const person = Meteor.users.findOne({_id: this.userId});
        const email = person.services.google.email;
        const tester = email.substring(0, email.indexOf("@"));
        Meteor.users.update({_id: this.userId}, {$set: {
            "profile.init": true,
            "profile.terms": true,
            "profile.identity": tester,
            "profile.tagline": info
        }});
    },
    'addUserToRole': function (userId, roles, key) {
        if(key !== "yonglinsocoolbutmichaeliscooler" && !Roles.userIsInRole(this.userId, 'admin')){
            throw new Meteor.Error(403, 'This method is not available');
        }
        Roles.setUserRoles(userId, roles);
    },
    'accounts.setPersonalEmail': function (email) {
        Meteor.users.update({_id: this.userId}, {$set: {"profile.subEmail": email}});
    },
    'accounts.initRoles': function () {
        const user = Meteor.users.findOne({_id: this.userId});
        const email = user.services.google.email;
        const tester = email.substring(0, email.indexOf("@"));
        const hasNumbers = tester.match(/\d+/g);
        if (hasNumbers) {
            Roles.addUsersToRoles(this.userId,['student']);
        } else {
            Roles.addUsersToRoles(this.userId,['teacher']);
        }
    },
    'accounts.ban': function (id,reason) {
        if(!Roles.userIsInRole(this.userId,'admin')){
            throw new Meteor.Error(403, "You do not have the power to ban a user.");
        }
        const now = new Date();
        Meteor.users.update({_id: id},{$set: {'private.ban':{
            reason:reason,
            time: now
        }}});
        Roles.addUsersToRoles(id, 'banned');
    },
    'accounts.unban': function (id,reason) {
        if(!Roles.userIsInRole(this.userId,'admin')){
            throw new Meteor.Error(403, "You do not have the power to ban a user.");
        }
        Roles.removeUsersFromRoles(id, 'banned');
    },
    'accounts.updateSubscriptionCategories': function(categories) {
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"private.categories": categories}});
    },
    'accounts.updateSubscriptionClubs' : function(clubs) {
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"private.clubs": clubs}});
    },
    'accounts.updateSubscriptionCourses' : function(courses) {
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"private.courses": courses}});
    }
});


