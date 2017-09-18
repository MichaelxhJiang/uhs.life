import { Meteor } from 'meteor/meteor';
import { Drafts } from './drafts.js';

if (Meteor.isServer) {
   Meteor.publish('drafts', function draftsPublication(limit, author) {
    return Drafts.find({
        'author': author
    },{
        limit: limit
    });
  });
}

Meteor.methods({
    'drafts.postDraftTextImage' : function(json) {
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
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
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
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
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
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
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
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
        if (!(Roles.userIsInRole( this.userId, 'teacher') ||
            Roles.userIsInRole( this.userId, 'admin') ||
            Roles.userIsInRole( this.userId, 'announcementEditor'))) {
            throw new Meteor.Error(400, "You do not have permission...Reported");
        }
        return Drafts.find({"authorId": userId});
   }
});
