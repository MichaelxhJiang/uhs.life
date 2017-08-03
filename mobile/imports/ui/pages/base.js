import { FlowRouter } from 'meteor/kadira:flow-router';

import './base.html';

Template.base.events({
    'click .base-loginButton': function (evt, template) {
        FlowRouter.go("/login");
    },
    'click .base-signupButton': function (evt, template) {
        FlowRouter.go("/signup");
    }
});

Template.base.onRendered(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: false,
        autoplay: 2500,
    });
});