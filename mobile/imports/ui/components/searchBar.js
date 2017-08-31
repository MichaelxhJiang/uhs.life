import {$} from 'meteor/jquery';
import {Template} from 'meteor/templating';
import {Session} from 'meteor/session';
import {FlowRouter} from 'meteor/kadira:flow-router';

import './searchBar.html';

Template.searchBar.events({
    'click #back': function (evt, template) {
        FlowRouter.go("/home");
    },
    'click #menuToggle': function (evt) {
        var container = $("#mySidenav");
        var toggle = $("#menuToggle");
        if (!toggle.hasClass("is-active")) {
            container.addClass("slide-in");
            toggle.addClass("is-active");
        } else if (toggle.hasClass("is-active")) {
            container.removeClass("slide-in");
            toggle.removeClass("is-active");
        }
    },
    'keyup .search-bar' : function() {
        searchPost(document.getElementById("search-bar").value);
    }
});

Template.searchBar.helpers({
    content: function () {
        return Session.get('content');
    }
});

