import { Meteor } from 'meteor/meteor';
import { Drafts } from './drafts.js';

Meteor.methods({
    'postDraftTextImage' : function(json) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        //adds draft to the Drafts collection
        Drafts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });
    },
    'postDraftText' : function(json) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        //adds draft to the Drafts collection
        Drafts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });
    },
    'postDraftImage' : function(json) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        //adds draft to the Drafts collection
        Drafts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });
    },
    'postDraftBlog' : function(json) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }

        //adds draft to the Drafts collection
        Drafts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });
    },
    'getDraftsByUserId' : function(userId) {
      let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
          //TODO
      }
      return Drafts.find({"authorId": userId});
   }
});
