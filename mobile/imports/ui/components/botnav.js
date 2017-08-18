import {$} from 'meteor/jquery';
import {Template} from 'meteor/templating';
import {Session} from 'meteor/session';
import {FlowRouter} from 'meteor/kadira:flow-router';

import './botnav.html';


Template.botnav.events({
    'click #home': function (evt, template) {
        FlowRouter.go("/home");
    },
    'click #marks': function (evt, template) {
        FlowRouter.go("/marks");
    },
    'click #news': function (evt, template) {
        FlowRouter.go("/search");
    },
});