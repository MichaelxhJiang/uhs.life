import { Meteor } from 'meteor/meteor';
import { Drafts } from './drafts.js';

Meteor.methods({
   'postDraftTextImage' : function(title, text, imgId, fileType, textFirst, tags, date) {
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
         tags: tags,
         date: date
      };

      //adds draft to the Drafts collection
      Drafts.insert(draft, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error(err);
         }
      });
   },
   'postDraftText' : function(title, text, tags, date) {
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
         tags: tags,
         date: date
      };

      //adds draft to the Drafts collection
      Drafts.insert(draft, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error(err);
         }
      });
   },
   'postDraftImage' : function(title, imgId, fileType, tags, date) {
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
         tags: tags,
         date: date
      };

      //adds draft to the Drafts collection
      Drafts.insert(draft, function(err, content) {
         //error catch for algolia issues
         if(err) {
            console.error(err);
         }
      });
   },
   'postDraftBlog' : function(title, subtitle, imgId, fileType, content, tags, date) {
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
         tags: tags,
         date: date
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
