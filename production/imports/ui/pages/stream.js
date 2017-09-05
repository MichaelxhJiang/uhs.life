/**
 * Created by Yonglin Wang on 7/31/2017.
 */
import imagesLoaded from 'imagesloaded';
import './stream.html'
import { Images } from '../../api/images/images.js';

Template.stream.onRendered(function () {
    let $grid = $('.grid');
    let isotopeSettings = {
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer'
        }
    };
    Tracker.autorun(function () {
        let postSub = Meteor.subscribe('posts');
        if(postSub.ready()){
            $('.grid').isotope();
        }
    });
    const cursor = Posts.find({});
    let cursorHandle = cursor.observeChanges({
        added: function (newDoc) {
            $grid.isotope(isotopeSettings);
            $grid.imagesLoaded().progress( function() {
                $grid.isotope(isotopeSettings);
            });
        },
        changed: function (newDoc, oldDoc) {
            $grid.isotope(isotopeSettings);
            $grid.imagesLoaded().progress( function() {
                $grid.isotope(isotopeSettings);
            });
        },
        removed: function (oldDoc) {
            $grid.isotope(isotopeSettings);
            $grid.imagesLoaded().progress( function() {
                $grid.isotope(isotopeSettings);
            });
        }
    });
});

Template.stream.onCreated(function () {
    let greeting = "";
    let thehours = new Date().getHours();
    let morning = ('Good morning');
    let afternoon = ('Good afternoon');
    let evening = ('Good Evening');

    if (thehours >= 0 && thehours < 12) {
        greeting = morning;

    } else if (thehours >= 12 && thehours < 17) {
        greeting = afternoon;

    } else if (thehours >= 17 && thehours < 24) {
        greeting = evening;
    }
    Session.set('navTitle', greeting + ' ;; This is Your Stream ;; ' + moment().format("MMMM Do YYYY"));
});

Template.stream.helpers({
    'picture': function () {
        return Session.get('user_img');
    },
    'allPosts': function () {
        return Posts.find({});
    },
    'effectiveDate': function () {
        return (this.startDate === this.endDate) ? this.startDate : this.startDate + " - " + this.endDate
    },
    'isImageOnly': function () {
        return this.subType === 'imageOnly' && this.type === 'announcement'
    },
    'isTextOnly': function () {
        return this.subType === 'textOnly' && this.type === 'announcement'
    },
    'isImageText': function () {
        return this.subType === 'imageText' && this.type === 'announcement'
    },
    'isBlog': function () {
        return this.type === 'blog'
    },
    'textOverImage': function () {
        return this.subType === 'imageText' && this.type === 'announcement' && this.meta.priority === 'text'
    },
    'imageOverText': function () {
        return this.subType === 'imageText' && this.type === 'announcement' && this.meta.priority === 'image'
    },
    'writer': function () {
        return Meteor.users.findOne({_id: this.author}).services.google.name;
    },
    'imageLink': function () {
        if(this.meta.hasUnsplash){
            getUnsplashLink(this.imgId);
            return Session.get('unsplashFeatured');
        }else if(this.imgId){
            return Images.findOne({_id: this.imgId}).url();
        }
    }

});

Template.stream.events({
    'click .filter-btn': function (evt) {
        let filterValue = $(evt.target).attr('data-filter');
        $('.is-checked').removeClass('is-checked');
        $(evt.target).addClass('is-checked');
        $('.grid').isotope({ filter: filterValue });
    },
    'click .blog-item': function (evt,template) {
        let obj = $(evt.target).closest($('.blog-item'));
        let id = obj.attr('id');
        FlowRouter.go('/blog/'+id);
    }
});
getUnsplashLink = function (id) {
    Meteor.call('setupUnsplash', function (err) {
        if(err){
            console.log(err);
        }else{
            Meteor.call('getPhoto', id, function (err,data) {
                if(err){
                    console.log(err);
                }else{
                    Session.set('unsplashFeatured', data.urls.full);
                    $('.grid').isotope();
                }
            })
        }
    });
};