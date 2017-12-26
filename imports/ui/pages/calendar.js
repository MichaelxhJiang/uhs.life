import './calendar.html';
Template.calendar.onRendered(function(){
    
});

Template.fullpagecal.onRendered(function(){
    $('#closeCal').hide();
    
});

Template.fullpagecal.events({
    'click #openCal': function(){
        $('#openCal').fadeOut('fast', function(){
            $('#closeCal').fadeIn('fast');
        });
        $('.nav-comp').fadeOut('fast', function(){
            $('.calendar-body').fadeIn(500, function(){
                $('.calendar').fullCalendar({
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
            $('.main').hide();
        });
    },
    'click #closeCal': function(){
        $('.main').show();
        $('#closeCal').fadeOut('fast', function(){
            $('#openCal').fadeIn('fast');
        });
        $('.calendar-body').fadeOut(500, function(){
            $('.nav-comp').fadeIn('fast');
        });
    }
});