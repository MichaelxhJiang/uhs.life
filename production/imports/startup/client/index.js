/**
 * This file defines the entry point of the client application, all initialization
 * behaviors are defined here.*/
'use strict';
import { TAPi18n } from 'meteor/tap:i18n'
import './imports.js';
import './routes.js';

Deps.autorun(function(){
    Session.setDefault('searchContent', {hits:[]});
    document.title = Session.get("DocumentTitle");
    TAPi18n.setLanguage('en')
        .done(function () {
        })
        .fail(function (error_message) {
            // Handle the situation
            console.log(error_message);
        });
});

function getUserLanguage() {
    return "en";
}