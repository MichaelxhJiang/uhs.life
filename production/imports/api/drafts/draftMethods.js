import { Meteor } from 'meteor/meteor';
import { Drafts } from './drafts.js';

if (Meteor.isServer) {
   Meteor.publish('drafts', function draftsPublication() {
    return Drafts.find();  //TODO only show drafts of current user
  });
}

Meteor.methods({
    'drafts.postDraftTextImage' : function(json) {
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
    'drafts.postDraftText' : function(json) {
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
    'drafts.postDraftImage' : function(json) {
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
    'drafts.postDraftBlog' : function(json) {
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
    'drafts.getDraftsByUserId' : function(userId) {
      let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
          //TODO
      }
      return Drafts.find({"authorId": userId});
   }
});
