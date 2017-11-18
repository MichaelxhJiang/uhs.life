import '../lib/charting.js';
import '../lib/alert.js';

import {Images} from '../../api/images/images.js';

import './course.html';

Template.course.onRendered(function () {
    Tracker.autorun(function () {
        let sub = Meteor.subscribe('allCourses',1000);
        Meteor.subscribe('images');
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
    let k,t,a,c;
    $( document ).ready(function() {
        Tracker.autorun(function () {
            let marks = Session.get('courseData').categoryMarks;
            if(marks){
                setProgressBar(Session.get('displayMark').substring(1));
                try{
                    console.log();
                    k.data.datasets[0].data = [marks[0], 100-marks[0]];
                    t.data.datasets[0].data = [marks[1], 100-marks[1]];
                    c.data.datasets[0].data = [marks[2], 100-marks[2]];
                    a.data.datasets[0].data = [marks[3], 100-marks[3]];
                    k.update();
                    t.update();
                    a.update();
                    c.update();
                }catch (e){
                    console.log('first time graphing');
                    k = drawChart('knowledgeChart', marks[0]);
                    t = drawChart('thinkingChart', marks[1]);
                    a = drawChart('communicationChart', marks[2]);
                    c = drawChart('applicationChart', marks[3]);
                }

            }
        });
        $(document).scroll(function () {
            $('.performance-progress').each(function () {
                $(this).css({ width: $(this).attr('data-progress') });
            });
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
        return newArr;
    },
    'percentage': function () {
        return (Math.round(((this.mark / this.outOf) * 100) * 10) / 10) + "%";
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
            return Images.findOne({_id: id}).link();
        }
    },
    'isMobile': function () {
        return $( window ).width() <= 768;
    },
    'culminating': function () {
        return Session.get('courseData').categories.O *100 + '%';
    }
});

Template.course.events({
    'click .performance': function (evt, template) {
        let choice = $(evt.target).closest($('.performance'));
        let assessment = $(evt.target).closest($('.assessment-body'));
        let title = assessment.find('.assessment-title').text();
        let object = null;
        _.forEach(Session.get('courseData').data.assessment, function (item) {
            if(item.title === title){
                object = item;
            }
        });
        if(!choice.hasClass('not-available')){
            let data = $(evt.target).closest($('.assessment-performance')).find($('.performance-presenter'));
            let section = data.find('.presenter-section');
            let achieved = data.find('.achieved');
            let outOf = data.find('.out-of');
            let weight = data.find('.weight');
            if(choice.hasClass('knowledge')){
                data.css({
                    background: 'linear-gradient(to right, #f7971e, #ffd200)'
                });
                achieved.text(object.K.mark);
                outOf.text(object.K.outOf);
                weight.text(object.K.weight);
                section.text('Knowledge');
            }else if(choice.hasClass('thinking')){
                data.css({
                    background: 'linear-gradient(to right, #11998e, #38ef7d)'
                });
                achieved.text(object.T.mark);
                outOf.text(object.T.outOf);
                weight.text(object.T.weight);
                section.text('Thinking');
            }else if(choice.hasClass('communication')){
                data.css({
                    background: 'linear-gradient(to right, #7F00FF, #E100FF)'
                });
                achieved.text(object.C.mark);
                outOf.text(object.C.outOf);
                weight.text(object.C.weight);
                section.text('Communication');
            }else if(choice.hasClass('application')){
                data.css({
                    background: 'linear-gradient(to right, #fc4a1a, #f7b733)'
                });
                achieved.text(object.A.mark);
                outOf.text(object.A.outOf);
                weight.text(object.A.weight);
                section.text('Application');
            }else if(choice.hasClass('other')){
                data.css({
                    background: 'linear-gradient(to right, #757F9A, #D7DDE8)'
                });
                achieved.text(object.O.mark);
                outOf.text(object.O.outOf);
                weight.text(object.O.weight);
                section.text('Culminating');
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
            let names = [], marks = [];
            _.forEach(Session.get('courseData').data.assessment, function (item) {
                names.push(item.title);
            });
            _.forEach(Session.get('courseData').timeline, function (item) {
                marks.push(item.mark);
            });
            console.log(names,marks);
            drawPolyChart('markByAssignment',names, marks);
            drawPerformChart('sectionMarkByAssignment',['a','b','c','d'],[90, 88, 85, 99],[88, 90, 99, 78],[100,89,67,88],[99,99,89,86]);
        }else{
            $(currentValue).fadeOut('fast');
            $(filterValue).fadeIn('slow');
        }
    }
});