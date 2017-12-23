import '../lib/fullcalendar.js';
import '../lib/gcal.js';
import './calendar.html';
Template.calendar.onRendered(function(){
    setTitle('Calendar');
    $('.calendar').fullCalendar({
        weekends: false,
        googleCalendarApiKey:'AIzaSyCYvWxCfU4knsjla015YTHeGHChKdrDf_c',
        events: {
            googleCalendarId: 'unionville.hs@gapps.yrdsb.ca',
            className: 'schoolcal-event'
        },
    });
});
