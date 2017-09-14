/**
 * Created by Yonglin Wang on 9/12/2017.
 */
import './blogs.html'

Template.blogs.onCreated(function () {
    Session.set('navTitle', 'Home of Stories');
});

Template.blogs.onRendered(function () {
    Tracker.autorun(function () {
        Meteor.subscribe('blogCategories');
        Meteor.subscribe('posts')
    })
});

Template.blogs.helpers({
    'blogCategories': function () {
        return BlogCategories.find({})
    }
});

Template.blogCategory.helpers({
   'categoryName': function () {
       return this.name;
   }
});