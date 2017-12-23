/**
 * Created by Yonglin Wang on 9/24/2017.
 */

import './bigPicture.html';
import { Images } from '../../api/images/images.js';
import flickity from 'flickity';
import imagesLoaded from 'imagesloaded';

Template.bigPicture.onRendered(function () {
    Tracker.autorun(function () {
        let newsSub = Meteor.subscribe('announcements', 10, Meteor.userId());
        Meteor.subscribe('images');
        if(newsSub.ready()){
            $('.flickity').flickity({
                cellAlign: 'left',
                contain: true,
                imagesLoaded: true,
                lazyLoad: true,
                autoPlay: 5000,
                pageDots: false,
                prevNextButtons: false,
                pauseAutoPlayOnHover: false,
                selectedAttraction: 0.01,
                friction: 0.15
            });
            $('.dot').css('width',$('.flickity-page-dots').width()/$('.dot').length + 'px');
        }
    });
});

Template.bigPicture.helpers({
    'announcement': function () {
        return Posts.find({});
    }
});

Template.bigPictureItem.helpers({
    'imageLink': function () {
        try{
            return Images.findOne({_id: this.imgId}).link();
        }catch(e){}

    }
});

Template.bottomBar.onRendered(function () {
    $(document).ready(function() {
        displayTime();
        $("#rotatingMessage").Morphext(morphSettings);
    });
});

function displayTime() {
    var time = moment().format('h:mm');
    $('#clock').html(time);
    setTimeout(displayTime, 1000);
}