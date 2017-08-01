import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Images } from '../imports/api/announcements/images.js';
import '/imports/startup/client'

import './main.html';

if(Meteor.isClient) {
   window.fbAsyncInit = function() {
      //Setup Facebook API
      setupFacebook();

      //Setup Twitter API
      Meteor.call('setupTwitterAPI', function(response) {
         console.log(response);
      });
      Session.set("textFirst", x);
      Session.set("newImageId", "null");
      Session.set('newFileType', "null");
   };
}

/*
* ADD NEW ANNOUNCEMENT FUNCTIONS
*/
Template.addAnnouncementTextMedia.events({
   'submit .new'(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const title = target.title.value;
      const text = target.text.value;
      const imgId = Session.get('newImageId');
      const fileType = Session.get('newFileType');
      const textFirst = Session.get("textFirst");
      if (!(imgId === "null")) {
         console.log("adding text_media announcement with imgId: " + imgId);

         Meteor.call('postAnnouncementTextMedia', title, text, imgId, fileType, textFirst, function(response) {

         })
         // Clear form
         target.title.value = '';
         target.text.value = '';

         //Clear curent media
         Session.set('newImageId', "null");
         Session.set('newFileType', "null");
      } else {
         console.log("Cannot post. No media file was uploaded");
      }
   }
})

Template.addAnnouncementTextMedia.events({
   'change [type=checkbox]': function(event){
      var x = event.target.checked;
      Session.set("textFirst", x);
      console.log("Text First : " + Session.get("textFirst"));
   }
});

Template.addAnnouncementMedia.events({
   'submit .new'(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const title = target.title.value;
      const imgId = Session.get('newImageId');
      const fileType = Session.get('newFileType');
      if (!(imgId === "null")) {
         console.log("adding media announcement with imgId: " + imgId);

         Meteor.call('postAnnouncementMedia', title, imgId, fileType, function(response) {

         })
         // Clear form
         target.title.value = '';
         target.message.value = '';

         //Clear curent media
         Session.set('newImageId', "null");
         Session.set('newFileType', "null");
      } else {
         console.log("Cannot post. No media file was uploaded");
      }
   }
})

Template.addAnnouncementText.events({
   'submit .new'(event) {
      // Prevent default browser form submit
      event.preventDefault();
      console.log("adding text announcement");
      // Get value from form element
      const target = event.target;
      const title = target.title.value;
      const text = target.text.value;

      Meteor.call('postAnnouncementText', title, text, function(response) {

      })
      // Clear form
      target.title.value = '';
      target.text.value = '';

      //Clear curent media
      Session.set('newImageId', "null");
      Session.set('newFileType', "null");
   }
})

/*
* ADD NEW IMAGE
*/
Template.addImage.events({
   'dropped #dropzone': function(event) {
      console.log("dropped file in")
      FS.Utility.eachFile(event, function(file) {
         //add the new image
         Images.insert(file, function (err, fileObj) {
            if (err){
               console.log(err);
            } else {
               console.log("New image got uploaded");
               //remove the currently uploaded image
               //if there is none, this will not do anything
               Images.remove({_id:Session.get('newImageId')}, function(err) {
                  if(err) {
                     console.log("error removing image:\n" + err);
                  }
               });
               //retreive file extension
               var fileUrl = '/cfs/files/images/'+file._id;
               console.log("file.val = " + fileObj.extension());

               Session.set('newImageId', fileObj._id); //update the image id to current image
               Session.set('newFileType', fileObj.extension());   //update the file type

               console.log("new image id: " + Session.get('newImageId'));
               //console.log("new file type: " + ext);
            }
         });
      });
   }
})

/*
* ANNOUNCEMENT LIST
*/
Template.announcements.onCreated(function announcementsOnCreated() {
   searchAll();
});
Template.announcements.helpers({
   content: function () {
      return Session.get('results');
   }
});

Template.announcements.events({
   'click .announcement': function(){
      Session.set('currentAnnouncement', this); //set the current message clicked into session
   }
});

/*
* DISPLAY CURRENT POST
*/
Template.message.helpers({
   post() {
      return Session.get('currentAnnouncement');
   },
   isTextMedia() {
      var post = Session.get('currentAnnouncement');
      console.log("text_media " + post.class === "announcement" && post.type === "text_media");
      return post.class === "announcement" && post.type === "text_media";
   },
   isText() {
      var post = Session.get('currentAnnouncement');
      console.log("text " + post.class === "announcement" && post.type === "text");
      return post.class === "announcement" && post.type === "text";
   },
   isMedia() {
      var post = Session.get('currentAnnouncement');
      console.log("media " + post.class === "announcement" && post.type === "media");
      return post.class === "announcement" && post.type === "media";
   },
   isBlog() {
      var post = Session.get('currentAnnouncement');
      console.log("blog " + post.class === "blog");
      return post.class === "blog";
   }
});

/*
* DISPLAY CURRENT IMAGE
*/
Template.viewImage.helpers({
   image() {
      var imageId = Session.get('currentAnnouncement').imgId;
      console.log("image id: " + imageId);
      console.log(Images.findOne({_id:imageId}).url());
      return Images.findOne({_id:imageId}).url();
   }
})

/*
* SEARCH
*/
Template.search.rendered = function(){
};
Template.search.helpers({
   content: function () {
      return Session.get('content');
   }
});

Template.search.events({
   'keyup #mySearch' : function() {
      searchPost(document.getElementById("mySearch").value);
      console.log(document.getElementById("mySearch").value);
   }

});
