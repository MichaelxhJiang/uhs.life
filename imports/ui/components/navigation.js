/**
 * Created by Yonglin Wang on 8/1/2017.
 */
import Typed from 'typedjs-placeholder'
import { Images } from '../../api/images/images.js';
import './navigation.html'
import '../lib/morphext.js'
Template.navigation.onRendered(function () {
    //$('.course-list').hide();
    $('.main-search').hide();
    $('.search-content').hide();
    $('.nav-overlay').hide();
    Session.set('searchContent', {hits:[]});
});

Template.navigation.helpers({
    'date': function () {
        return "Friday April 7th";
    },
    'username': function () {
        return Session.get('name');
    },
    'title': function () {
        return Session.get('navTitle');
    },
    'isStudent': function () {
        return Roles.userIsInRole(Meteor.userId(), 'student');
    },
    'isAdmin': function () {
        return Roles.userIsInRole(Meteor.userId(), 'admin');
    },
    'searchContent': function () {
        return Session.get('searchContent').hits
    },
    'img': function () {
        if(this.unsplash){
            return this.unsplash.urls.full;
        }else if(this.imgId){
            try{
                return Images.findOne({_id: this.imgId}).url();
            }catch(e){
                //console.log('error getting photo')
            }

        }
    },
    'courses': function () {
        return Session.get('courses');
    },
    'state': function () {
        const now = new Date();
        let diff = Math.abs(now - Session.get('tokenExpiry'));
        let minutes = Math.floor((diff/1000)/60);
        return (minutes > 30) ? 'expired' : 'fine'
    },
    'mark': function () {
        let mark = this.mark;
        if(mark.length > 6){
            mark = "N/A"
        }
        return mark;
    },
    'dash': function () {
        return Session.get('inDash');
    }
});

Template.navigation.events({
    'click .nav-extend': function () {
        let sideNav = $('.side-nav');
        let sideNavPrompt = $('.side-nav-prompt');
        $('.top-nav').toggleClass('right-push');
        $('.main').toggleClass('right-push');
        sideNav.toggleClass('right-push');
        if($('.main').hasClass('right-push')) {
            sideNavPrompt.html("<i class='fa fa-times'></i> <span class='hidden-xs hidden-sm'>CLOSE</span>");
            $('.nav-overlay').fadeIn('fast');
        }else{
            sideNavPrompt.html("<i class='fa fa-bars'></i> <span class='hidden-xs hidden-sm'>MENU</span>");
            $('.nav-overlay').fadeOut('fast');
        }
    },
    'click .nav-overlay': function () {
        let sideNav = $('.side-nav');
        let sideNavPrompt = $('.side-nav-prompt');
        $('.top-nav').removeClass('right-push');
        $('.main').removeClass('right-push');
        sideNav.removeClass('right-push');
        if($('.main').hasClass('right-push')) {
            sideNavPrompt.html("<i class='fa fa-times'></i> <span class='hidden-xs hidden-sm'>CLOSE</span>");
            $('.nav-overlay').fadeIn('fast');
        }else{
            sideNavPrompt.html("<i class='fa fa-bars'></i> <span class='hidden-xs hidden-sm'>MENU</span>");
            $('.nav-overlay').fadeOut('fast');
        }
    },
    'click .nav-oper': function () {
        let searchBox = $('.main-search');
        let searchContent = $('.search-content');
        let prompt = $('.top-operation-prompt');
        Session.set('searchContent', {hits:[]});
        if(!searchBox.is(':visible')){
            searchBox.fadeIn('fast');
            $('.search-result').show();
            searchContent.fadeIn("<i class='fa fa-times'></i> <span class='hidden-sm hidden-xs'>SEARCH</span>");
            prompt.html("CLOSE");
            searchBox.typed({
                strings: [
                    "\"Volleyball\"",
                    "\"Octoberfest\"",
                    "\"Guidance\"",
                    "\"DECA\"",
                    "\"USAC\"",
                    "\"Who made this app?\""
                ],
                typeSpeed: 40,
                loop: true,
                shuffle: true,
                showCursor: true,
                cursorChar: "|",
            });
            $('html, body').css({
                overflow: 'hidden',
            });
        }else{
            searchBox.fadeOut('fast');
            $('.search-result').hide();
            searchContent.fadeOut('fast');
            prompt.html("<i class='fa fa-search'></i> <span class='hidden-sm hidden-xs'>SEARCH</span>");
            $('html, body').css({
                overflow: 'auto',
            });
        }
    },
    'click #academics': function () {
        if(!Session.get('token')){
            Modal.show('teachAssistConnect')
        }
        let list = $('.course-list');
        let icon = $('.academics-icon');
        if(!list.is(':visible')){
            list.show(500);
            icon.removeClass('fa-bars');
            icon.addClass('fa-times');
        }else{
            list.hide(500);
            icon.removeClass('fa-times');
            icon.addClass('fa-bars')
        }
    },
    'input .main-search': function () {
        let searchBox = $('.main-search');
        let searchPrompt = $('.search-prompt');
        if(searchBox.val().length > 0){
            searchPrompt.css('display','none');
            console.log(searchBox.val());
            searchPost(searchBox.val());
        }else{
            searchPrompt.css('display','block');
            Session.set('searchContent', {hits:[]});
        }
    }
});

Template.teachAssistPass.helpers({
    'student_id': function () {
        return Meteor.user().profile.student_number;
    }
});

Template.teachAssistConnect.events({
    'submit #connectLoginForm': function (evt) {
        evt.preventDefault();
        const pass = $('#reLoginPass').val();
        Meteor.call('getTeachAssistTokens', {student_number: Meteor.user().profile.student_number, password: pass}, function (err, data) {
            if(err){
                alertError("Failed to connect with teach assist", err.message);
            }else{
                Meteor.users.update({_id: Meteor.userId()}, {$set: {"private.token": data, "private.tokenDate": new Date()}}, function (err) {
                    if(err){
                        alertError("Something went wrong", err.message);
                    }else{
                        Meteor.call('getTeachAssistCourses', data, function (err,data) {
                            if(err){
                                alertError("Something went wrong", "");
                            }else{
                                Meteor.users.update({_id: Meteor.userId()}, {$set: {"private.courses": data}});
                                Modal.hide('teachAssistPass');
                                FlowRouter.reload();
                            }
                        });
                    }
                });
            }
        })
    }
});

Template.teachAssistPass.events({
   'submit #reLoginForm': function (evt) {
       evt.preventDefault();
       const pass = $('#reLoginPass').val();
       Meteor.call('getTeachAssistTokens', {student_number: Meteor.user().profile.student_number, password: pass}, function (err, data) {
           if(err){
               alertError("Failed to connect with teach assist", err.message);
           }else{
               Meteor.users.update({_id: Meteor.userId()}, {$set: {"private.token": data, "private.tokenDate": new Date()}}, function (err) {
                   if(err){
                       alertError("Something went wrong", err.message);
                   }else{
                       Meteor.call('getTeachAssistCourses', data, function (err,data) {
                           if(err){
                               alertError("Something went wrong", "");
                           }else{
                               Meteor.users.update({_id: Meteor.userId()}, {$set: {"private.courses": data}});
                               Modal.hide('teachAssistPass');
                               FlowRouter.reload();
                           }
                       });
                   }
               });
           }
       })
   }
});

setTitle = function (title) {
    $('.nav-title-text').html('<span>'+title+'</span>');
};

setProgressBar = function (percentage) {
    $('.nav-title-text').css('color','#fff');
    $('.nav-hub-progress').animate({ width: percentage }, 1500);
};
