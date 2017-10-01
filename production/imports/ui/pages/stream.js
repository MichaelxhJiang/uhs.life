/**
 * Created by Yonglin Wang on 7/31/2017.
 */
import imagesLoaded from 'imagesloaded';
import './stream.html'
import { Images } from '../../api/images/images.js';
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
        let postSub = Meteor.subscribe('announcements', 10, Meteor.userId());
        let categorySub = Meteor.subscribe('categories');
        let imageSub = Meteor.subscribe('images');
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
            /*'meta.approved': true,*/
            'type': 'announcement'
        });
        query.observeChanges({
            added: function(id, fields) {
                setTimeout(function () {
                    $('.grid').isotope('reloadItems');
                    $('.grid').isotope()
                }, 500);
            },
            changed: function(id, fields) {
                setTimeout(function () {
                    $('.grid').isotope('reloadItems');
                    $('.grid').isotope()
                }, 500);
            },
            removed: function() {
                setTimeout(function () {
                    $('.grid').isotope('reloadItems');
                    $('.grid').isotope()
                }, 500);
            }
        });
        return query;
    },
    'effectiveDate': function () {
        return (this.startDate === this.endDate) ? moment(this.startDate).format("MMMM Do YYYY") : moment(this.startDate).format("MMMM Do YYYY") + " - " + moment(this.endDate).format("MMMM Do YYYY");
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
    'categories': function () {
        let list = this.categories;
        let text = "";
        _.forEach(list,function (item) {
            text += item + " "
        });
        return text;
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
        if(this.unsplash){
            return this.unsplash.urls.full;
        }else if(this.imgId){
            try{
                return Images.findOne({_id: this.imgId}).url();
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
            console.log(id);
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