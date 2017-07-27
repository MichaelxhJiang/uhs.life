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

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    /**
    //Twitter Post
    Meteor.call('postTwitter', "hello w0rld!", function(response) {
      console.log(response);
    })

    //Facebook post
    postFacebook("hello W0rld!");
    **/
  },
});

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

    //add new announcement to collections
    Announcements.insert({title: title, message: msg, imageId: imgId});

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
Template.announcements.helpers({
  announcement() {
    return Announcements.find();  //return all announcements stored in collection
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
    return Session.get('currentAnnouncement').title;  //return the title in session
  },
  message() {
    return Session.get('currentAnnouncement').message;  //return the message in session
  }
});

/*
* DISPLAY CURRENT IMAGE
*/
Template.viewImage.helpers({
  image() {
    var imageId = Session.get('currentAnnouncement').imageId;
    console.log("image id: " + imageId);
    console.log(Images.findOne({_id:imageId}).url());
    return Images.findOne({_id:imageId}).url();
  }
})

Template.movies.helpers({
    content: function () {
        return Session.get('content');
    }
});

Template.movies.events({
    'click button'(event, instance) {
        searchPost(document.getElementById("mySearch").value);
        console.log(document.getElementById("mySearch").value);
    },
});

Template.post.events({
    'click button'(event, instance) {
      var announcement, description;
      announcement = document.getElementById("announcement").value;
        description = document.getElementById("description").value;
        console.log(announcement);
        console.log(description);
        Meteor.call('postAnnouncement', announcement, description, function(response) {
        })
    },
});
