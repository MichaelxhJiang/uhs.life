import './bookingAdmin.html';
import { Images } from "../../api/images/images";
import { Transactions } from '../../api/booking/booking';
import { Template } from 'meteor/templating';
import { Roles } from 'meteor/alanning:roles';

Template.bookingAdminMain.onRendered(function(){
    Tracker.autorun(function(){
        Meteor.subscribe('allShows');
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

//
// ─── BOOKING HOME PAGE ──────────────────────────────────────────────────────────
//

    
Template.bookingHome.onRendered(function(){
    setTitle("All Shows");
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
    },
    'cast': function(){
        let castInfo = "";
        _.each(this.cast, function(item,i){
            if(i === 3){
                castInfo += '...';
            } 
            if(i > 2){
                return false;
            }
            if(i > 0){
                castInfo += ', ';
            }
            castInfo += item.name;
        });
        return castInfo;
    }
});

Template.bookingDetails.onRendered(function(){
    const DELAY_DUR = 200;
    let timeout = 0, timeouttotal = $('.show-details-container').length * DELAY_DUR;
    Tracker.autorun(function(){
        let showSub = Meteor.subscribe('allShows');
        let tranSub = Meteor.subscribe('transactionsByShow', Session.get('workingShow'));
        Meteor.subscribe('files.images.all');
        if(showSub.ready()){
            const showInfo = Shows.findOne({'_id': Session.get('workingShow')});
            console.log(showInfo);
            setTitle(showInfo.title);
        }
        if(tranSub.ready()){
            let sortedRecords = _.sortBy(Transactions.find().fetch(),function(o){
                return o.timestamp;
            });
            console.log(sortedRecords);
            let workingDate = sortedRecords[0].timestamp;
            let sale = [], daySale = 0;
            let days = [moment(sortedRecords[0].timestamp).format('MMM Do')];
            _.each(sortedRecords,function(item){
                if(item.timestamp.getMonth() === workingDate.getMonth() && item.timestamp.getDate() === workingDate.getDate()){
                    console.log(item);
                    daySale += item.ticketCount;
                }else{
                    sale.push(daySale);
                    daySale = 0;
                    workingDate = item.timestamp;
                    days.push(moment(item.timestamp).format('MMM Do'));
                    console.log(item);
                    daySale += item.ticketCount;
                }
            });
            sale.push(daySale);
            drawPolyChartBetter('salesChart', days, sale);
        }
    });
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

Template.bookingDetails.events({
    'click .transaction-overview': function(evt){
        $(evt.target).closest('.transaction-overview').next().toggle();
    }
});

Template.bookingDetails.helpers({
    'showDetails': function(){
        return Shows.findOne({'_id': Session.get('workingShow')});
    },
    'imageLink': function () {
        try{
            return Images.findOne({_id: this.cover}).link();
        }catch(e){
            //console.log('error getting photo')
        }
    },
    'cast': function(){
        let castInfo = "";
        _.each(this.cast, function(item,i){
            if(i === 3){
                castInfo += '...';
            } 
            if(i > 2){
                return false;
            }
            if(i > 0){
                castInfo += ', ';
            }
            castInfo += item.name;
        });
        return castInfo;
    },
    'ticketsSold': function(){
        let culmination = 0;
        _.each(Transactions.find().fetch(), function(item){
            culmination += item.ticketCount;
        });
        return culmination;
    },
    'income': function(){
        let culmination = 0;
        _.each(Transactions.find().fetch(), function(item){
            culmination += item.amount;
        });
        return culmination;        
    },
    'remainingSeats': function(){
        const TOTAL_SEATS = 527;
        let seatsSold = 0;
        _.each(Transactions.find().fetch(), function(item){
            seatsSold += item.ticketCount;
        });
        return TOTAL_SEATS - seatsSold;
    },    
    'allTransactions': function(){
        return Transactions.find().fetch();
    },
    'timestamp': function(){
        return moment(new Date(this.timestamp)).format('MMM Do YYYY, h:mm:ss a');
    }
});

Template.bookingSellers.onRendered(function(){
    Tracker.autorun(function(){
        Meteor.subscribe('allUsers');
    });
});

Template.bookingSellers.helpers({
    'userList': function(){
        return Session.get('potentialSellerList');
    },
    'currentSellers': function(){
        return Roles.getUsersInRole('ticketSeller').fetch();
    }
});

Template.bookingSellers.events({
    'input #userSearchBox': function(evt){
        $('.seller-suggestions').fadeIn('fast');
        const query = $(evt.target).val();
        if(query){
            Session.set('potentialSellerList', Meteor.users.find({"services.google.name" : {$regex : '.*'+query+'.*', $options:'i'}}).fetch());
        }else{
            $('.seller-suggestions').fadeOut('fast');
            Session.set('potentialSellerList', null);
        }
    },
    'click .seller-person': function(evt){
        const id = $(evt.target).closest('.seller-person').attr('id');
        if(Roles.userIsInRole(id,'ticketSeller')){
            alertError("Oops","User is already a seller!");
        }else{
            Meteor.call('shows.addSeller', id, function(err){
                if(err){
                    alertError("Failed to add user to seller", err.message);
                }
            });
        }
    },
    'click .seller-container': function(evt){
        const id = $(evt.target).closest('.seller-container').attr('id');
        if(Roles.userIsInRole(id,'ticketSeller')){
            Meteor.call('shows.removeSeller', id, function(err){
                if(err){
                    alertError("Failed to remove user from seller", err.message);
                }
            });
        }else{
            alertError("Oops", "User is not a seller!");
        }
    }
});