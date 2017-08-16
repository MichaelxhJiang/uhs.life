import {Template} from 'meteor/templating';
import {Session} from 'meteor/session';
import {FlowRouter} from 'meteor/kadira:flow-router';

import './sidebar.html'

Template.sidebar.events({
    'click .logoutButton': function (evt, template) {
        FlowRouter.go("/");
    },
})