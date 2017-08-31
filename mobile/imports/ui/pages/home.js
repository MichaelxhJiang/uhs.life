import { FlowRouter } from 'meteor/kadira:flow-router';

import './home.html';

Template.home.events({
    'click .logoutButton': function (evt, template) {
        FlowRouter.go("/");
    },
});

Template.home.onRendered(function () {
    // Use the Packery jQuery plugin
    searchAll();
});

let counter = 0;
Template.home.helpers({
    content: function () {
        return Session.get('results');
    },
    getType: function (i){
        console.log(Session.get('results').hits[counter].type);
        return Session.get('results').hits[counter].type;
    },
    counter: function(){
        counter++;
    }
});

Template.registerHelper('typeCheck', function(v1, v2) {
    if (typeof v1 === 'object' && typeof v2 === 'object') {
        return _.isEqual(v1, v2); // do a object comparison
    } else {
        return v1 === v2;
    }
});

Template.home.onDestroyed( function(){
   counter = 0;
});