/**
 * Created by Yonglin Wang on 9/24/2017.
 */
import './bigPicture.html'
import { Images } from '../../api/images/images.js';
import flickity from 'flickity';
import imagesLoaded from 'imagesloaded';
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
                autoPlay: 1000,
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
    });
});

function displayTime() {
    var time = moment().format('hh:mm:ss');
    $('#clock').html(time);
    setTimeout(displayTime, 1000);
}
var terms = ["term 1", "term 2", "term 3"]; //array of terms to rotate

function rotateTerm() {
    var ct = $("#rotate").data("term") || 0;
    $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct])
        .fadeIn().delay(2000).fadeOut(200, rotateTerm);
}
​​​​​​​​​​​​​​​​​​​$(rotateTerm); //start it on document.ready
​