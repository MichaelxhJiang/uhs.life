import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './facebook.js'

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
    /**Twitter Post
    Meteor.call('postTwitter', "hello w0rld", function(response) {
      console.log(response);
    })
    **/
    
    /**Facebook post
    postFacebook("hello W0rld");
    **/
  },
});
