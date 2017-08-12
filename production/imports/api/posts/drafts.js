import { Mongo } from 'meteor/mongo';

export const Drafts = new Mongo.Collection('drafts');

Meteor.methods({
   'postDraftTextImage' : function(title, text, imgId, fileType, textFirst) {
      var accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }
      //define object being posted with layout
      var draft = [{
         class: "announcement",
         type: "text_media",
         title: title,
         text: text,
         imgId: imgId,
         fileType: fileType,
         textFirst: textFirst
      }];

      //adds draft to the Drafts collection
      Drafts.insert(draft, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error('Algolia returned an error', err);
         }
      });
   },
   'postDraftText' : function(title, text) {
      var accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }
      //define object being posted with layout
      var objects = [{
         class: "announcement",
         type: "text",
         title: title,
         text: text
      }];

      //adds draft to the Drafts collection
      Drafts.insert(draft, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error('Algolia returned an error', err);
         }
      });
   },
   'postDraftImage' : function(title, imgId, fileType) {
      var accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }
      //define object being posted with layout
      var objects = [{
         class: "announcement",
         type: "media",
         title: title,
         imgId: imgId,
         fileType: fileType
      }];

      //adds draft to the Drafts collection
      Drafts.insert(draft, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error('Algolia returned an error', err);
         }
      });
   },
   'postDraftBlog' : function(title, description, imgId, fileType, content) {
      var accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }
      //define object being posted with layout
      var objects = [{
         class: "blog",
         title: title,
         description: description,
         imgId: imgId,
         fileType: fileType,
         content: content
      }];

      //adds draft to the Drafts collection
      Drafts.insert(draft, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error('Algolia returned an error', err);
         }
      });
   },
});
