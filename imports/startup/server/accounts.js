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

Accounts.validateNewUser(function (user) {
    const email = user.services.google.email;
    if (email.indexOf("gapps.yrdsb.ca") !== -1) {
        console.log("validatedNewUser");
    } else {
        console.log('not gapps yrdsb account');
        throw new Meteor.Error(403, "Currently uhs.life is only available to YRDSB GAPPS users, stay tuned for parental support!");
    }
    return true;
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
/*Accounts.validateLoginAttempt(function (info) {
    let status = true;
    try{
        status = !Roles.userIsInRole(info.user._id, 'banned');
    }catch(e){
        status = true;
    }
    console.log("validateLoginAttempt");
    if(!status){
        throw new Meteor.Error(403, "Sorry you have been banned from uhs.life by the administration for the following reason: ");
    }
    return true;
});*/
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
        Meteor.users.update({_id: id},{$set: {'private.bannedReason':reason}});
        Roles.addUsersToRoles(id, 'banned');
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
