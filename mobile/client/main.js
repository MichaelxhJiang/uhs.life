import '/imports/startup/client';
import { DDP } from 'meteor/ddp-client'

remote = DDP.connect('https://uhslifedemo2.herokuapp.com/')

if (Meteor.isClient) {
    connectToExistingBackend('localhost:3030');
}

if (Meteor.isCordova) { // signIn through cordova
    Meteor.cordova_g_plus({
        cordova_g_plus: true,
        profile: ["email", "email_verified", "gender", "locale", "name", "picture"],
        webClientId: 'your-web-client-id'
    }, (error) => {
        if (error) {
            // error handling code
            console.log(error);
        }
    });
}