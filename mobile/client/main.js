import '/imports/startup/client';
import { DDP } from 'meteor/ddp-client'

remote = DDP.connect('https://uhslifedemo2.herokuapp.com/')

if (Meteor.isClient) {
    connectToExistingBackend('localhost:3030');
}
