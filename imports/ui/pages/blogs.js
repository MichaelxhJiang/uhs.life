/**
 * Created by Yonglin Wang on 9/12/2017.
 */

import { Images } from '../../api/images/images.js';
import './blogs.html';

Template.blogs.onCreated(function () {
    Session.set('navTitle', 'Stories');
});

Template.blogs.onRendered(function () {
    Tracker.autorun(function () {
        Meteor.subscribe('blogCategories');
        Meteor.subscribe('posts');
        Meteor.subscribe('files.images.all');
    });
});

Template.blogs.helpers({
    'blogCategories': function () {
        return BlogCategories.find({});
    }
});

Template.blogCategory.helpers({
    'categoryName': function () {
        return this.name;
    },
    'blogPreviews': function () {
        console.log(this.name);
        return Posts.find({
            'type': 'blog',
            'categories': this.name
        },{
            limit: 4
        });
    }
});

Template.blogItem.onRendered(function () {
});

Template.blogItem.helpers({
    'imageLink': function () {
        if(this.unsplash){
            console.log(this);
            return this.unsplash.urls.full;
        }else if(this.imgId){
            try{
                return Images.findOne({_id: this.imgId}).link();
            }catch(e){
                //console.log('error getting photo')
            }
        }
    },
    'writer': function () {
        return Meteor.users.findOne({_id: this.author}).services.google.name;
    },
    'date': function () {
        return moment(this.releasedDate).format("MMMM Do YYYY");
    },
    'subtitle': function () {
        let string = this.subtitle;
        let length = 40;
        return string.length > length ?
            string.substring(0, length - 3) + "..." :
            string;
    }
});

Template.blogItem.events({
    'click .blog-item': function (evt,template) {
        let obj = $(evt.target).closest($('.blog-item'));
        let id = obj.attr('id');
        FlowRouter.go('/blog/'+id);
    }
});