import { Meteor } from 'meteor/meteor';

Meteor.methods({
    //return the facebook app id
    'getFBAppId' : function() {
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
        Roles.userIsInRole( this.userId, 'admin') ||
        Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }
        return '443985995958874';
    },
    'getFBSecret' : function() {
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
        Roles.userIsInRole( this.userId, 'admin') ||
        Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }
        return '8d9cbbb60eb7f71e105f23ca026f391c';
    },
    'extendToken' : function(accessToken) {
        /*$.get("https://graph.facebook.com/oauth/access_token?", {
        grant_type:'fb_exchange_token',
        client_id:appId,
        client_secret:appSec,
        fb_exchange_token:accessToken },
        function (data) {
        console.log(data);
    })*/
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
        Roles.userIsInRole( this.userId, 'admin') ||
        Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }

        Meteor.call('getFBAppId', function(err, response) {
            let appId = response;
            Meteor.call('getFBSecret', function(err, response2) {
                let appSec = response2;
                console.log("proceeding to HTTP call")
                HTTP.call( 'GET', "https://graph.facebook.com/oauth/access_token?", {
                    grant_type:'fb_exchange_token',
                    client_id:appId,
                    client_secret:appSec,
                    fb_exchange_token:accessToken },
                    function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("HELLO");
                        console.log(data);
                    }
                });
            });
        });
    }
});
