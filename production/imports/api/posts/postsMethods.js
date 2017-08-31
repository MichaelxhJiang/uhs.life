import { Meteor } from 'meteor/meteor';
import { Posts } from './posts.js';

Meteor.methods({
    'postTextImage' : function(json) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        //adds draft to the Posts collection
        Posts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });
    },
    'postText' : function(json) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        //adds draft to the Posts collection
        Posts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });
    },
    'postImage' : function(json) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        //adds draft to the Posts collection
        Posts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });
    },
    'postBlog' : function(json) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        //adds draft to the Posts collection
        Posts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });
    },
});
