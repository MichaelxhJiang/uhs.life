/**
 * This file defines the entry point of the client application, all initialization
 * behaviors are defined here.*/
'use strict';
import './imports.js';
import './routes.js';

Deps.autorun(function(){
    Session.setDefault('searchContent', {hits:[]});
    document.title = Session.get("DocumentTitle");
});

function getUserLanguage() {
    return "en";
}

if (Meteor.isClient) {
    Meteor.startup(function () {
        TAPi18n.setLanguage('en')
            .done(function () {
            })
            .fail(function (error_message) {
                // Handle the situation
                console.log(error_message);
            });
    });
}