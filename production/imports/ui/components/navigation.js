/**
 * Created by Yonglin Wang on 8/1/2017.
 */
import Typed from 'typedjs-placeholder'
import { Images } from '../../api/images/images.js';
import './navigation.html'
import '../lib/morphext.js'
let morphSettings = {
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "flipInX",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ";;",
    // The delay between the changing of each phrase in milliseconds.
    speed: 5000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
};
Template.navigation.onRendered(function () {
    //$('.course-list').hide();
    $('.main-search').hide();
    $('.search-content').hide();
    $('.nav-overlay').hide();
    $(".text-morph").Morphext(morphSettings);
    Session.set('searchContent', {hits:[]});
});

Template.navigation.helpers({
    'date': function () {
        return "Friday April 7th"
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
        return (minutes > 15) ? 'expired' : 'fine'
    },
    'mark': function () {
        let mark = this.mark;
        if(mark.length > 6){
            mark = "N/A"
        }
        return mark;
    }
});

Template.navigation.events({
    'click .nav-extend': function () {
        let sideNav = $('.side-nav');
        let sideNavPrompt = $('.side-nav-prompt');
        let width = parseInt(sideNav.css('margin-left'));
        if(width !== 0) {
            sideNav.css('margin-left', '0');
            sideNavPrompt.html("<i class='fa fa-times'></i> CLOSE");
            $('.top-nav').css('margin-left', '+=320px');
            $('.main').css('margin-left', '+=320px');
            $('.nav-overlay').fadeIn('fast');
        }else{
            sideNav.css('margin-left','-320px');
            $('.top-nav').css('margin-left','-=320px');
            $('.main').css('margin-left','-=320px');
            sideNavPrompt.html("<i class='fa fa-bars'></i> MENU");
            $('.nav-overlay').fadeOut('fast');
        }
    },
    'click .nav-overlay': function () {
        let sideNav = $('.side-nav');
        let sideNavPrompt = $('.side-nav-prompt');
        let width = parseInt(sideNav.css('margin-left'));
        if(width !== 0) {
            sideNav.css('margin-left', '0');
            sideNavPrompt.html("<i class='fa fa-times'></i> CLOSE");
            $('.top-nav').css('margin-left', '+=320px');
            $('.main').css('margin-left', '+=320px');
            $('.nav-overlay').fadeIn('fast');
        }else{
            sideNav.css('margin-left','-320px');
            $('.top-nav').css('margin-left','-=320px');
            $('.main').css('margin-left','-=320px');
            sideNavPrompt.html("<i class='fa fa-bars'></i> MENU");
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
            searchContent.fadeIn('fast');
            prompt.html("CLOSE");
            searchBox.typed({
                strings: [
                    "Type something here to Search.",
                    "Ask us what you want to know,",
                    "We'll try to find an answer.",
                    "\"Volleyball practice schedule\"",
                    "\"Octoberfest\"",
                    "\"Guidance\"",
                    "\"Quote of the day\"",
                    "\"usac\"",
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
            prompt.html("SEARCH");
            $('html, body').css({
                overflow: 'auto',
            });
        }
    },
    'click #academics': function () {
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

Template.teachAssistPass.events({
   'submit #reLoginForm': function (evt) {
       evt.preventDefault();
       const pass = $('#reLoginPass').val();
       Meteor.call('getTeachAssistTokens', {student_number: Meteor.user().profile.student_number, password: pass}, function (err, data) {
           if(err){
               alertError("Failed to connect with teach assist", err.message);
           }else{
               console.log(data);
               Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.private.token": data, "profile.private.tokenDate": new Date()}}, function (err) {
                   if(err){
                       alertError("Something went wrong", err.message);
                   }
               });
           }
       })
   }
});

setTitle = function (title) {
    $('.nav-title-text').html('<span>'+title+'</span>');
    $(".text-morph").Morphext(morphSettings);
};

setProgressBar = function (percentage) {
    $('.nav-title-text').css('color','#fff');
    $('.nav-hub-progress').animate({ width: percentage }, 1500);
};
