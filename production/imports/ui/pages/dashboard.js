/**
 * Created by Yonglin Wang on 8/22/2017.
 */
import './dashboard.html'
import { Images } from '../../api/images/images.js';

Template.dashHome.onRendered(function () {
   Tracker.autorun(function () {
       Meteor.subscribe('posts');
       Meteor.subscribe('categories');
   });
});

Template.dashHome.helpers({
    'post': function () {
        return Posts.find({
            'meta.approved': false
            //'type': 'announcement'
        });
    },
    'testProfile': function () {
        return Session.get('user_img');
    },
    'writer': function () {
        //console.log(this);
        return Meteor.users.findOne({_id: this.author}).services.google.name;
    },
    'noImage': function () {
        return (this.subType === 'textOnly')
    },
    'imageLink': function () {
        try{
            return Images.findOne({_id: this.imgId}).url();
        }catch (e){

        }
    },
    'hasContent': function () {
        return this.subType !== 'imageOnly'
    }
});



Template.dashboard.events({
    'click .new-post': function (evt) {
        let obj = $(evt.target).closest($('.new-post'));
        let id = obj.attr('id');
        Session.set('editingId', id);
        let info = Posts.findOne({_id: id});
        Session.set('dashEditorData', info);
        if(!$(evt.target).attr('class').includes('btn-reject') && !$(evt.target).attr('class').includes('btn-approve'))
            Modal.show('dashPostEditor');
    },
    'click .btn-approve': function (evt) {
        let obj = $(evt.target).closest($('.new-post'));
        let id = obj.attr('id');
        Meteor.call('posts.approvePost', id, function (err) {
            if(err){
                alertError("Error Occurred When Approving Post", err.message)
            }
        })
    },
    'click .btn-reject': function (evt) {
        let obj = $(evt.target).closest($('.new-post'));
        let id = obj.attr('id');
        Meteor.call('posts.removePost', id, function (err) {
            if(err){
                alertError("Error Occurred When Removing Post", err.message)
            }
        })
    }
});

Template.dashPostEditor.onRendered(function () {
    let data = Session.get('dashEditorData');
    console.log(data);
    $('#newPostHeadline').val(data.headline);
    $('#newPostBody').val(data.content);
    $("#newPostTags").tagsinput('items');
    console.log(data.tags);
    _.forEach(data.tags,function (item) {
        $('#newPostTags').tagsinput('add', item);
    });
    $(document).ready(function () {
        $('#newPostCategories').select2({
            placeholder: "Click to select matching categories",
            allowClear: true,
        });
        $("#newPostCategories").val(data.categories).trigger("change");
/*        $('.input-daterange').datepicker({
            startDate: '+0d'
        });
        $('.input-daterange').datepicker('update', '2017-09-23', '2017-09-25');*/
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
    },
    'submit .dash-announcement-edit': function (evt) {
        evt.preventDefault();
        let separators = [' , ', ', ', ',', ' ,'];
        let tags = $('#newPostTags').val().split(new RegExp(separators.join('|'), 'g'));
        let json = {
            headline: $('#newPostHeadline').val(),
            content: $('#newPostBody').val(),
            tags: tags
        };
        Posts.update({_id: Session.get('editingId')},{$set: json});
        Modal.hide();
    }
});
