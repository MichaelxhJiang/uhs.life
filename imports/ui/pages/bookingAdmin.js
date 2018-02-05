import './bookingAdmin.html';
import { Images } from "../../api/images/images";
Template.bookingAdminMain.onRendered(function(){
    setTitle("Dashboard");
    Tracker.autorun(function(){
        let showSub = Meteor.subscribe('allShows');
        Meteor.subscribe('files.images.all');
    });
});

Template.bookingAdminMain.events({
    'click .clickable': function(evt){
        const showID = $(evt.target).closest('.show-container').attr('id');
        let timeout = ($('.clickable').length-1) * 150,timeoutOri = ($('.clickable').length-1) * 150;
        $('.clickable').each(function(){
            let self = $(this);
            setTimeout(function(){
                self.addClass('animated fadeOutDown');
            },timeout);
            timeout -= 150;
        });
        setTimeout(function(){
            FlowRouter.go('/booking-admin/' + showID);
        }, 800 + timeoutOri);
    }
});

Template.bookingHome.helpers({
    'shows': function(){
        return Shows.find({});
    },
    'imageLink': function () {
        try{
            return Images.findOne({_id: this.cover}).link();
        }catch(e){
            //console.log('error getting photo')
        }
    }
});

Template.bookingDetails.onRendered(function(){
    drawPolyChartBetter('salesChart',['Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8'], [10, 12, 15, 32, 9]);
    const DELAY_DUR = 200;
    let timeout = 0, timeouttotal = $('.show-details-container').length * DELAY_DUR;
    $('.show-details-container').each(function(){
        let self = $(this);
        setTimeout(function(){
            self.addClass('animated fadeInUp');
        }, timeout);
        timeout += DELAY_DUR;
    });
    window.setTimeout( function(){
        $('.animated').each(function(){
            let self = $(this);
            $(this).css('opacity','1');
            self.removeClass('animated fadeInUp');
        });
    }, 2000 + timeouttotal);
    
});