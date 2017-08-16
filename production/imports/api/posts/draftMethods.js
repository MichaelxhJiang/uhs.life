import { Meteor } from 'meteor/meteor';
import { Drafts } from './drafts.js';

Meteor.methods({
   'postDraftTextImage' : function(title, text, imgId, fileType, textFirst, tags) {
      var accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }
      //define object being posted with layout
      var draft = {
         class: "announcement",
         type: "text_media",
         title: title,
         text: text,
         imgId: imgId,
         fileType: fileType,
         textFirst: textFirst,
         tags: tags
      };

      //adds draft to the Drafts collection
      Drafts.insert(draft, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error(err);
         }
      });
   },
   'postDraftText' : function(title, text, tags) {
      var accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }
      //define object being posted with layout
      var draft = {
         class: "announcement",
         type: "text",
         title: title,
         text: text,
         tags: tags
      };

      //adds draft to the Drafts collection
      Drafts.insert(draft, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error(err);
         }
      });
   },
   'postDraftImage' : function(title, imgId, fileType, tags) {
      var accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }
      //define object being posted with layout
      var draft = {
         class: "announcement",
         type: "media",
         title: title,
         imgId: imgId,
         fileType: fileType,
         tags: tags
      };

      //adds draft to the Drafts collection
      Drafts.insert(draft, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error(err);
         }
      });
   },
   'postDraftBlog' : function(title, subtitle, imgId, fileType, content, tags) {
      var accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
      if (accessLevel === 'teacher' || accessLevel === 'admin') {
         //TODO
      }
      //define object being posted with layout
      var draft = {
         class: "blog",
         title: title,
         subtitle : subtitle,
         imgId: imgId,
         fileType: fileType,
         content: content,
         tags: tags
      };

      //adds draft to the Drafts collection
      Drafts.insert(draft, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error(err);
         }
      });
   },
});
