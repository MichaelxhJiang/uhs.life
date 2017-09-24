import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Images } from '../imports/api/announcements/images.js';
import '/imports/startup/client'
import schedule from 'node-schedule';
import { DDP } from 'meteor/ddp-client'

//let remote = DDP.connect('http://localhost:3000/');
let remote = DDP.connect('https://uhslifedemo2.herokuapp.com/');
let Posts = new Meteor.Collection('posts', remote);

remote.subscribe('posts', function() {
   console.log("hello");
    var posts = Posts.find();
    console.log(JSON.stringify(Posts.find({}), null, 2));  // get 1
});

import './main.html';

if(Meteor.isClient) {

   window.fbAsyncInit = function() {
       /*
      //Setup Facebook API
      //setupFacebook();

      //Setup Twitter API
      Meteor.call('setupTwitterAPI', function(response) {
         //console.log(response);
      });
      //init session variables
      Session.set("textFirst", true);
      Session.set("newImageId", "null");
      Session.set('newFileType', "null");

      //test unsplash API
      Meteor.call('setupUnsplash', function(response) {
         //console.log(response);
         Meteor.call('searchKeyword', "test", function(err, json) {
            //console.log(JSON.stringify(json, null, 2));
            var imgUrl = json.results[0].urls.regular;
            console.log("extracted url: " + imgUrl);
         });
      });*/
      //console.log(JSON.stringify(Posts.find({}), null, 2));
      //test mail chimp
      //Meteor.call('createCampaign', 'test email', 'bulletin');

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
    'change #fileInput'(e, template) {
       console.log("dropped file in")
       console.log(e);
       console.log("\n\n\n");
       console.log(e.currentTarget.files);
       if (e.currentTarget.files && e.currentTarget.files[0]) {
          console.log("HI");
           // We upload only one file, in case
           // multiple files were selected
           const upload = Images.insert({
               file: e.currentTarget.files[0],
               streams: 'dynamic',
               chunkSize: 'dynamic'
           }, false);

           upload.on('start', function () {
               console.log("starting upload");
           });

           upload.on('end', function (error, fileObj) {
               if (error) {
                   console.log("upload failed");
                   alert('Error during upload: ' + error);
               } else {
                   console.log("upload successful");
                   alert('File "' + fileObj.name + '" successfully uploaded');
               }
           });

           upload.start();
       }

      /*FS.Utility.eachFile(event, function(file) {
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
      });*/
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

/*
 * MailChimp
 */
Template.mailChimp.events({
   'submit .new'(event) {
      // Prevent default browser form submit
      event.preventDefault();
      // Get value from form element
      const target = event.target;
      const email = target.email.value;

      Meteor.call('addSubscriber', email, 'subscribed', function(response) {
         //console.log(JSON.stringify(response, null, 2));
      })
      // Clear form
      target.email.value = '';
   }
})
