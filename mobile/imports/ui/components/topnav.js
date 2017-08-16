import {$} from 'meteor/jquery';
import {Template} from 'meteor/templating';
import {Session} from 'meteor/session';
import {FlowRouter} from 'meteor/kadira:flow-router';

import './topnav.html';

Template.topnav.events({
    'click #back': function (evt, template) {
        FlowRouter.go("/home");
    }
});

$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $(".top-navbar").addClass("active");
        } else {
            $(".top-navbar").removeClass("active");
        }
    });
});