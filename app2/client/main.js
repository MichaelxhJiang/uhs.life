import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Announcements } from '../imports/api/announcements/announcements.js';
import { Images } from '../imports/api/announcements/images.js';
import '/imports/startup/client'

import './main.html';

if(Meteor.isClient) {
  window.fbAsyncInit = function() {
    setupFacebook();

    //Setup Twitter API
    Meteor.call('setupTwitterAPI', function(response) {
      console.log(response);
    });
  };
}

/*
* ADD NEW ANNOUNCEMENT
*/
Template.addAnnouncement.events({
  'submit .new'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const title = target.title.value;
    const msg = target.message.value;
    const imgId = Session.get('newImageId');
    console.log("adding announcement with imgId: " + imgId);

    Meteor.call('postAnnouncement', title, msg, imgId, function(response) {

      })
    // Clear form
    target.title.value = '';
    target.message.value = '';

    //Clear curent image
    Session.set('newImageId', "null");
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

          Session.set('newImageId', fileObj._id); //update the image id to current image
          console.log("new image id: " + Session.get('newImageId'));
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
* DISPLAY CURRENT MESSAGE
*/
Template.message.helpers({
  title() {
    return Session.get('currentAnnouncement').announcement;  //return the title in session
  },
  message() {
    return Session.get('currentAnnouncement').description;  //return the message in session
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
