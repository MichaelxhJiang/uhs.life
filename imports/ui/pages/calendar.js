import {moment} from 'meteor/momentjs:moment';

import './calendar.html';
Template.calendar.onRendered(function(){
    setTitle('Calendar');
    this.$('.calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,listYear'
          },
        googleCalendarApiKey:'AIzaSyCYvWxCfU4knsjla015YTHeGHChKdrDf_c',
        events: 'uhslifeoffficial@gmail.com',
        loading: function(state){
            $('.loader').toggle(state);
        }
    });
});
