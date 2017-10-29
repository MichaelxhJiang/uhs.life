/**
 * Created by Yonglin Wang on 8/30/2017.
 */
export const BlogCategories = new Mongo.Collection('blogcategories');

if (Meteor.isServer) {
    Meteor.publish('blogCategories', function blogCategoriesPublication() {
        return BlogCategories.find({});
    });
}