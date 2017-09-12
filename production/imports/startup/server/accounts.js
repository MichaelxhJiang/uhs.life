import { Meteor } from 'meteor/meteor';

if(Meteor.isServer){
    Meteor.publish('allUsers', function usersPublication() {
        return Meteor.users.find({});
    });
    Meteor.publish('allUsersLite', function usersPublication() {
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
   console.log('account created');
    if (user.profile == undefined) {
        user.profile = {
            init: false,
            teacher: false
        };
    }
    const email = user.services.google.email;
    const hasNumbers = email.match(/\d+/g);
    if (!hasNumbers) {
        user.profile.teacher = true;
    }
    return user;
});

Meteor.methods({
    'extendUserProfile': function (id,profile) {
        
    },
    'initUserProfile': function (id,info) {
        Meteor.users.update({_id: id}, {$set: {"profile.init": true}});
        Meteor.users.update({_id: id}, {$set: {"profile.studentNum": info.studentNum}});
        Meteor.users.update({_id: id}, {$set: {"profile.teachToken": info.token}});
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
    }
});