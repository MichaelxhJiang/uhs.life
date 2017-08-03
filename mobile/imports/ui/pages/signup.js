import { FlowRouter } from 'meteor/kadira:flow-router';

import './signup.html';

Template.signup.events({
    'click .signupButton': function (evt, template) {
        FlowRouter.go("/signup");
    },
    'click .back-button': function (evt, template) {
        FlowRouter.go("/");
    },
    'focus': function(event) {
        document.getElementById("signupButton").style.opacity = 0;
        document.getElementById("loginButton").style.opacity = 0;
        document.getElementById("backButton").style.opacity = 0;
    },
    'focusout': function(event) {
        document.getElementById("signupButton").style.opacity = 1;
        document.getElementById("backButton").style.opacity = 1;
    },
    'submit form': function(event) {
        console.log("Form submitted");
        document.getElementById("signupButton").style.opacity = 1;
        document.getElementById("backButton").style.opacity = 1;
    }
});

Template.signup.onRendered(function () {
    $("#signupButton").animate({width: "100%"});
});
