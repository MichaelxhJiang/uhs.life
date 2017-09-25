/**
 * Created by Yonglin Wang on 9/24/2017.
 */
import './bigPicture.html'
import { Images } from '../../api/images/images.js';
import flickity from 'flickity';
import imagesLoaded from 'imagesloaded';

let morphSettings = {
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "flipInX",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ";;",
    // The delay between the changing of each phrase in milliseconds.
    speed: 8000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
};
Template.bigPicture.onRendered(function () {
    Tracker.autorun(function () {
        let newsSub = Meteor.subscribe('announcements', 10, Meteor.userId());
        let imageSub = Meteor.subscribe('images');
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
            $('.dot').css('width',$('.flickity-page-dots').width()/$('.dot').length + 'px')
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
            return Images.findOne({_id: this.imgId}).url();
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