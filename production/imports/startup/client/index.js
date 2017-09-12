/**
 * This file defines the entry point of the client application, all initialization
 * behaviors are defined here.*/
'use strict';
import './imports.js';
import './routes.js';

Deps.autorun(function(){
    document.title = Session.get("DocumentTitle");
});