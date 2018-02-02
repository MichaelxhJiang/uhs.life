import { Meteor } from 'meteor/meteor';
import { Drafts } from './drafts.js';

if (Meteor.isServer) {
   Meteor.publish('drafts', function draftsPublication(limit) {
    return Drafts.find({
        'author': this.userId
    },{
        limit: limit
    });
  });
}

Meteor.methods({
    'drafts.postDraftTextImage' : function(json) {
        if (!Roles.userIsInRole( this.userId, ['teacher', 'admin', 'announcementEditor'])) {
            throw new Meteor.Error(403, "You do not have permission...Reported");
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
        if (!Roles.userIsInRole( this.userId, ['teacher', 'admin', 'announcementEditor'])) {
            throw new Meteor.Error(403, "You do not have permission...Reported");
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
        if (!Roles.userIsInRole( this.userId, ['teacher', 'admin', 'announcementEditor'])) {
            throw new Meteor.Error(403, "You do not have permission...Reported");
        }

        //adds draft to the Drafts collection
        Drafts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });
    },
    'drafts.postDraftVideo' : function (json) {
        if (!Roles.userIsInRole( this.userId, ['teacher', 'admin', 'announcementEditor'])) {
            throw new Meteor.Error(403, "You do not have permission...Reported");
        }

        //adds draft to the Draft collection
        Drafts.insert(json, function(err, content) {
            if (err) {
                console.error(err);
            }
        })
    },
    'drafts.postDraftBlog' : function(json) {
        if (!Roles.userIsInRole( this.userId, ['teacher', 'admin', 'announcementEditor'])) {
            throw new Meteor.Error(403, "You do not have permission...Reported");
        }

        //adds draft to the Drafts collection
        Drafts.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });
    },
    'drafts.updateDraft': function (postId, newContent) {
        const post = Drafts.findOne({_id: postId});
        if(!Roles.userIsInRole( this.userId, ['admin']) || post.author !== this.userId){
            throw new Meteor.Error(403, "You do not have permission to do so.");
        }
        Drafts.update({_id: postId}, {'$set': newContent});
    },
    'drafts.remove' : function(id) {
        if (!Roles.userIsInRole( this.userId, ['teacher', 'admin', 'announcementEditor', 'blogEditor'])) {
            throw new Meteor.Error(403, "You do not have permission...Reported");
        }
        let draft = Drafts.findOne({_id: id});
        if(draft.author !== this.userId){
            throw new Meteor.Error(403, "You do not have permission...Reported");
        }
        return Drafts.remove({_id: id});
   }
});
