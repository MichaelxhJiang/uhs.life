import { FlowRouter } from 'meteor/kadira:flow-router';

import './marks.html';

Template.marks.onRendered(function() {
    document.getElementById("marks").checked = true;
});

Template.marks.events({
    'click #marksDetail': function (evt, template) {
        FlowRouter.go("/marksDetail");
    },
});