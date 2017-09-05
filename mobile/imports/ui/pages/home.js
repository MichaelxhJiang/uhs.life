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
        return Session.get('results').hits[counter].subType;
    },
    counter: function(){
        counter++;
    },
    shortenDate: function(){
        let temp = Session.get('results').hits[counter].releaseDate;
        let tempArray = temp.split(" ");
        return tempArray[1] + " " + tempArray[2] + "," + tempArray[3];
    },
    checkContent: function(){
        return Session.get('results').hits[counter].content !== null;
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