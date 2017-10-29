/**
 * Created by Yonglin Wang on 8/30/2017.
 */
export const Categories = new Mongo.Collection('categories');

if (Meteor.isServer) {
    Meteor.publish('categories', function categoriesPublication() {
        return Categories.find({});
    });
}