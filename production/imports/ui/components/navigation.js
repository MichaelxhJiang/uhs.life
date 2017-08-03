/**
 * Created by Yonglin Wang on 8/1/2017.
 */
import Typed from 'typedjs-placeholder'
import './navigation.html'

Template.navigation.onRendered(function () {
    $('.course-list').hide();
    $('.global-search').hide();
    $('.main-search').typed({
        strings: [
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

});

Template.navigation.helpers({
    'date': function () {
        return "Friday April 7th"
    }
});

Template.navigation.events({
    'click .nav-extend': function () {
        let sideNav = $('.side-nav');
        let sideNavPrompt = $('.side-nav-prompt');
        let width = parseInt(sideNav.css('width'));
        if(width !== 320) {
            sideNav.css('width', '320px');
            sideNavPrompt.html("<i class='fa fa-times'></i> CLOSE");
            $('nav').css('margin-left', '+=320px');
            $('.main').css('margin-left', '+=320px');
        }else{
            sideNav.css('width','0');
            $('nav').css('margin-left','-=320px');
            $('.main').css('margin-left','-=320px');
            sideNavPrompt.html("<i class='fa fa-bars'></i> MENU");
        }
    },
    'click .nav-oper': function () {
        let searchBox = $('.global-search');
        let prompt = $('.top-operation-prompt');
        if(!searchBox.is(':visible')){
            searchBox.slideDown(500);
            prompt.html("CLOSE")
        }else{
            searchBox.slideUp(500);
            prompt.html("SEARCH")
        }
    },
    'click .logout-btn': function () {
        //l
        Meteor.logout(function() {
            FlowRouter.go('/');
        });
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
    }
});