/**
 * Created by Yonglin Wang on 9/12/2017.
 */
import './blogs.html'

Template.blogs.onCreated(function () {
    Session.set('navTitle', 'Home of Stories ;; Here, you can browse and read content created by other users.');
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

Template.blogItem.helpers({
    'imageLink': function () {
        if(this.unsplash){
            return this.unsplash.urls.full;
        }else if(this.imgId){
            try{
                return Images.findOne({_id: this.imgId}).url();
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
});

Template.blogItem.events({
    'click .blog-item': function (evt,template) {
        let obj = $(evt.target).closest($('.blog-item'));
        let id = obj.attr('id');
        FlowRouter.go('/blog/'+id);
    }
})