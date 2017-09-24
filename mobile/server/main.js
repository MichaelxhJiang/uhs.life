import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    Accounts.loginServiceConfiguration.remove({
        service: "google"
    });
    Accounts.loginServiceConfiguration.insert({
        service: "google",
        clientId: "152156454960-h8olc9vhu7juk77p71et1aekkr6qslm1.apps.googleusercontent.com",
        secret: "nL2ZzKMfrfwja7VHa9jmlhvU"
    });
});
