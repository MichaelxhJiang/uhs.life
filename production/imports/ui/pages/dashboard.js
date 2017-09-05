/**
 * Created by Yonglin Wang on 8/22/2017.
 */
import './dashboard.html'
import { Images } from '../../api/images/images.js';

Template.dashHome.onRendered(function () {
   Tracker.autorun(function () {
       Meteor.subscribe('posts');
   });
});

Template.dashHome.helpers({
    'post': function () {
        return Posts.find({
            'meta.approved': false,
            'type': 'announcement'
        });
    },
    'writer': function () {
        //console.log(this);
        return Meteor.users.findOne({_id: this.author}).services.google.name;
    },
    'noImage': function () {
        return (this.subType === 'textOnly')
    },
    'imageLink': function () {
        return Images.findOne({_id: this.imgId}).url();
    }
});

Template.dashboard.events({
    'click .new-post': function () {
        Modal.show('dashPostEditor');
    }
});

Template.dashPostEditor.onRendered(function () {
    this.$(".announce-tags").tagsinput('items');
    $(document).ready(function () {
        $('.category-select').select2({
            placeholder: "Click to select matching categories",
            allowClear: true
        });
        $('.input-daterange').datepicker({
            startDate: '+0d'
        });
    });
});

Template.dashPostEditor.events({
    'input .announcement-text': function (evt) {
        let maxlength = $(evt.target).attr("maxlength");
        let length = $(evt.target).val().length;

        if( length >= maxlength ){
            console.log("You have reached the maximum number of characters.");
            $('.announcement-counter').text(0);
        }else{
            $('.announcement-counter').text(maxlength - length);
        }
    }
});