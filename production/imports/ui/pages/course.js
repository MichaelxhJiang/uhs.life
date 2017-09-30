import '../lib/charting.js'
import '../lib/alert.js'
import {Images} from '../../api/images/images.js';
import './course.html';

Template.course.onRendered(function () {
    Tracker.autorun(function () {
        let sub = Meteor.subscribe('allCourses',1000);
        Meteor.subscribe('images')
        if(sub.ready()){
            let code = Session.get('courseData').data.course.substring(0,Session.get('courseData').data.course.indexOf("-"));
            let item = Courses.findOne({
                code: code
            });
            setTitle(item.name +' | ' + Session.get('displayMark'));
            Session.set('courseCode',code);
            Meteor.subscribe('postsByCourse',code,10);
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
                $(this).css({ width: $(this).attr('data-progress') });
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
    },
    'readings': function () {
        return Posts.find({
            'type': 'blog',
            organizationsValues: Session.get('courseCode')
        });
    },
    'imageLink': function () {
        if(this.unsplash){
            return this.unsplash.urls.full;
        }else if(this.imgId){
            let id = this.imgId;
            return Images.findOne({_id: id}).url();
        }
    },
    'isMobile': function () {
        return $( window ).width() <= 768;
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
        let filterValue = '.' + $(evt.target).attr('data-tab');
        let currentValue = '.' + $('.is-checked').attr('data-tab');
        $('.is-checked').removeClass('is-checked');
        $(evt.target).addClass('is-checked');
        if(filterValue === '.insights'){
            $(currentValue).fadeOut('fast');
            $('.insights').fadeIn('slow');
            drawPolyChart('markByAssignment',['a','b','c','d'], [90, 88, 85, 99]);
            drawPerformChart('sectionMarkByAssignment',['a','b','c','d'],[90, 88, 85, 99],[88, 90, 99, 78],[100,89,67,88],[99,99,89,86])
        }else{
            $(currentValue).fadeOut('fast');
            $(filterValue).fadeIn('slow');
        }
    }
});