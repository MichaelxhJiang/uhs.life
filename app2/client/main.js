import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
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
    //Twitter Post
    Meteor.call('postTwitter', "hello w0rld!", function(response) {
      console.log(response);
    })


    //Facebook post
    postFacebook("hello W0rld!");

  },
});

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
