import { FlowRouter } from 'meteor/kadira:flow-router';

import './home.html';

Template.home.events({
    'click .logoutButton': function (evt, template) {
        FlowRouter.go("/");
    },
})