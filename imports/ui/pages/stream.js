/**
 * Created by Yonglin Wang on 7/31/2017.
 */
import imagesLoaded from 'imagesloaded';
import { Images } from "../../api/images/images.js";
import './stream.html';
let isotopeSettings = {
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer'
    }
};
Template.stream.onRendered(function () {
    let $grid = $('.grid');
    Tracker.autorun(function () {
        let postSub = Meteor.subscribe('announcements', 100);
        Meteor.subscribe('allUsersLite');
        Meteor.subscribe('files.images.all');
        let categorySub = Meteor.subscribe('categories');
        if(postSub.ready()){
            $('.grid').isotope(isotopeSettings);
            $('.grid').imagesLoaded().progress( function() {
                $('.grid').isotope(isotopeSettings);
            });
        }
    });
    setTitle('Stream');
});

Template.stream.helpers({
    'category': function () {
      return Categories.find({});
    },
    'allPosts': function () {
        let query = Posts.find({
            'meta.approved': true,
            'type': 'announcement',
            'meta.display': true
        });
        query.observeChanges({
            added: function() {
                setTimeout(function () {
                    $('.grid').isotope('reloadItems');
                    $('.grid').imagesLoaded().progress( function() {
                        $('.grid').isotope();
                    });
                }, 500);
            },
            changed: function() {
                setTimeout(function () {
                    $('.grid').isotope('reloadItems');
                    $('.grid').imagesLoaded().progress( function() {
                        $('.grid').isotope();
                    });
                }, 500);
            },
            removed: function() {
                setTimeout(function () {
                    $('.grid').isotope('reloadItems');
                    $('.grid').imagesLoaded().progress( function() {
                        $('.grid').isotope();
                    });
                }, 500);
            }
        });
        if(query.fetch().length === 0){
            Meteor.defer(()=>{
                $('.filter-button-group').hide();
            });
        }
        return query.fetch().reverse();
    },
    'effectiveDate': function () {
        return (this.startDate === this.endDate) ? moment(this.startDate).format("MMMM Do YYYY") : moment(this.startDate).format("MMMM Do YYYY") + " - " + moment(this.endDate).format("MMMM Do YYYY");
    },
    'isImageOnly': function () {
        return this.subType === 'imageOnly';
    },
    'isTextOnly': function () {
        return this.subType === 'textOnly';
    },
    'isImageText': function () {
        return this.subType === 'imageText';
    },
    'isVideo': function () {
        return this.subType === 'video';
    },
    'categories': function () {
        let list = this.categories;
        let text = "";
        _.forEach(list,function (item) {
            text += item + " ";
        });
        return text;
    },
    'textOverImage': function () {
        return this.subType === 'imageText' && this.type === 'announcement' && this.meta.priority === 'text';
    },
    'imageOverText': function () {
        return this.subType === 'imageText' && this.type === 'announcement' && this.meta.priority === 'image';
    },
    'writer': function () {
        return Meteor.users.findOne({_id: this.author}).services.google.name;
    },
    'imageLink': function () {
        if(this.unsplash){
            return this.unsplash.urls.full;
        }else if(this.imgId){
            try{
                return Images.findOne({_id: this.imgId}).link();
            }catch(e){
                //console.log('error getting photo')
            }
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
            });
        }
    });
};