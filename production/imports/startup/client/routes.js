/**
 * This file defines all the routing that takes place
 *
 * */

import { Session } from 'meteor/session'
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route( '/', {
    action: function() {
        if(Meteor.userId()){
            BlazeLayout.render('applicationLayout', {main: 'stream'});
        }else
            BlazeLayout.render('applicationLayout', {main: 'login'});
    },
    name: 'root' // Optional route name.
});

FlowRouter.route('/stream',{
    action: function(){
        BlazeLayout.render('applicationLayout', {main: 'stream'});
    },
    name: 'stream'
});