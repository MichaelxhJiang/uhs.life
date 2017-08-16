import '../lib/charting.js'
import '../lib/alert.js'

import './course.html';

Template.course.onRendered(function () {
    alertSuccess("YES!", "This is a success");
    $( document ).ready(function() {
        new WOW().init();
        drawChart('knowledgeChart', 80);
        drawChart('thinkingChart', 75);
        drawChart('communicationChart', 90);
        drawChart('applicationChart', 60);
        $(document).scroll(function () {
            $('#test1').animate({ width: '80%' }, 1500);
            $('#test2').animate({ width: '90%' }, 1500);
            $('#test3').animate({ width: '95%' }, 1500);
            $('#test4').animate({ width: '60%' }, 1500);
            $('#test5').animate({ width: '50%' }, 1500);
            $('#test6').animate({ width: '100%' }, 1500);
            $('#test7').animate({ width: '78%' }, 1500);
        });
        $('.performance-presenter').hide();
    })
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
    }
});