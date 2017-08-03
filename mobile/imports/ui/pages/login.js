import { FlowRouter } from 'meteor/kadira:flow-router';

import './login.html';

Template.login.events({
    'click .loginButton': function (evt, template) {
        FlowRouter.go("/home");
    },
    'click .back-button': function (evt, template) {
        FlowRouter.go("/");
    },
    'focus': function(event) {
        document.getElementById("signupButton").style.opacity = 0;
        document.getElementById("loginButton").style.opacity = 0;
        document.getElementById("backButton").style.opacity = 0;
        document.getElementById("loginButton").disabled = true;
    },
    'focusout': function(event) {
        document.getElementById("loginButton").style.opacity = 1;
        document.getElementById("backButton").style.opacity = 1;
        document.getElementById("loginButton").disabled = false;
    },
});

Template.login.onRendered(function () {
    $("#loginButton").animate({width: "100%"});
});

