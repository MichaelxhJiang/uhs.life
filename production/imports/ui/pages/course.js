import '../lib/charting.js'
import '../lib/alert.js'

import './course.html';

Template.course.onRendered(function () {
    Tracker.autorun(function () {
        let sub = Meteor.subscribe('allCourses',1000);
        if(sub.ready()){
            let code = Session.get('courseData').data.course.substring(0,Session.get('courseData').data.course.indexOf("-"));
            let item = Courses.findOne({
                code: code
            });
            setTitle(code + ' | ' + item.name +' | You Received: ' + Session.get('displayMark'));
        }
    });
    $( document ).ready(function() {
        setProgressBar(Session.get('displayMark').substring(1));

        drawChart('knowledgeChart', 80);
        drawChart('thinkingChart', 75);
        drawChart('communicationChart', 90);
        drawChart('applicationChart', 60);
        $(document).scroll(function () {
            $('.performance-progress').each(function () {
                $(this).animate({ width: $(this).attr('data-progress') }, 1500);
            })
        });
        $('.performance-presenter').hide();
    });
    $('.insights').hide();
});

Template.course.helpers({
    'assessment': function () {
        let arr = Session.get('courseData').data.assessment;
        let newArr = [];
        while(arr.length) newArr.push(arr.splice(0,2));
        return newArr
    },
    'percentage': function () {
        return (Math.round(((this.mark / this.outOf) * 100) * 10) / 10) + "%"
    }
});

Template.course.events({
    'click .performance': function (evt, template) {
        let choice = $(evt.target).closest($('.performance'));
        if(!choice.hasClass('not-available')){
            let data = $(evt.target).closest($('.assessment-performance')).find($('.performance-presenter'));
            let section = data.find('.presenter-section');
            if(choice.hasClass('knowledge')){
                data.css({
                    background: '#FFC107'
                });
                section.text('Knowledge');
            }else if(choice.hasClass('thinking')){
                data.css({
                    background: '#4CAF50'
                });
                section.text('Thinking');
            }else if(choice.hasClass('communication')){
                data.css({
                    background: '#9C27B0'
                });
                section.text('Communication');
            }else if(choice.hasClass('application')){
                data.css({
                    background: '#FF9800'
                });
                section.text('Application');
            }
            data.slideDown('fast');
        }

    },
    'click .close-presenter': function (evt, template) {
        let data = $(evt.target).closest($('.performance-presenter'));
        data.slideUp('fast');
    },
    'click .filter-btn': function (evt) {
        let filterValue = $(evt.target).attr('data-tab');
        $('.is-checked').removeClass('is-checked');
        $(evt.target).addClass('is-checked');
        if(filterValue === 'insights'){
            $('.assessments').fadeOut('fast');
            $('.insights').fadeIn('slow');
        }else{
            $('.insights').fadeOut('fast');
            $('.assessments').fadeIn('slow');
        }
    }
});