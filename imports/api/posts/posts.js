import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');

Posts.deny({
    insert: function () {
        return true;
    },
    remove: function () {
        return true;
    },
    update: function () {
        return true;
    }
});