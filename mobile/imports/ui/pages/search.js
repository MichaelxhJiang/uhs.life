import { FlowRouter } from 'meteor/kadira:flow-router';

import './search.html';

Template.search.onRendered(function() {
    document.getElementById("news").checked = true;
});