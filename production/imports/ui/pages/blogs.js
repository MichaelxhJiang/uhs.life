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

Template.blogItem.onRendered(function () {
    $(document).ready(function() {

        let imageHeight, wrapperHeight, overlap, container = $('.image-wrap');

        function centerImage() {
            imageHeight = container.find('img').height();
            wrapperHeight = container.height();
            overlap = (wrapperHeight - imageHeight) / 2;
            container.find('img').css('margin-top', overlap);
        }

        $(window).on("load resize", centerImage);

        let el = document.getElementById('wrapper');
        if (el.addEventListener) {
            el.addEventListener("webkitTransitionEnd", centerImage, false); // Webkit event
            el.addEventListener("transitionend", centerImage, false); // FF event
            el.addEventListener("oTransitionEnd", centerImage, false); // Opera event
        }

    });
});

Template.blogItem.helpers({
    'imageLink': function () {
        if(this.unsplash){
            console.log(this);
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
})