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

Template.stream.helpers({
    'userInfo': function () {
        console.log(Meteor.user());
        return Meteor.user();
    }
});

Template.stream.events({
    'click .filter-btn': function (evt) {
        let filterValue = $(evt.target).attr('data-filter');
        $('.grid').isotope({ filter: filterValue });
    }
});