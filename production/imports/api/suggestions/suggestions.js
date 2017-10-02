import { Mongo } from 'meteor/mongo';

export const Suggestions = new Mongo.Collection('suggestions');

if (Meteor.isServer) {
    Meteor.publish('suggestions', function suggestionsPublication() {
        if (this.userId) {
            return Suggestions.find({});
        }
    });
}