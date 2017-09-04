/**
 * Created by Yonglin Wang on 7/31/2017.
 */
import imagesLoaded from 'imagesloaded';
import './stream.html'

Template.stream.onRendered(function () {
    let $grid = $('.grid');
    $grid.isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer'
        }
    });
    $grid.imagesLoaded().progress( function() {
        $grid.isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer',
                gutter: '.gutter-sizer'
            }
        });
    });

});

Template.stream.onCreated(function () {
    let greeting = "";
    let thehours = new Date().getHours();
    let morning = ('Good morning');
    let afternoon = ('Good afternoon');
    let evening = ('Good Evening, ' + Session.get('name'));

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
    'userInfo': function () {
        console.log(Meteor.user());
        return Meteor.user();
    },
    'picture': function () {
        return Session.get('user_img');
    },
});

Template.stream.events({
    'click .filter-btn': function (evt) {
        let filterValue = $(evt.target).attr('data-filter');
        $('.is-checked').removeClass('is-checked');
        $(evt.target).addClass('is-checked');
        $('.grid').isotope({ filter: filterValue });
    }
});