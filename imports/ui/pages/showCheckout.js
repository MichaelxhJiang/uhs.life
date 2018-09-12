import './showCheckout.html';
import '../lib/seats.js';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Images } from "../../api/images/images";
let seats = [];
let show;
Template.showCheckout.onRendered(function(){
    let firstClick = true;
    var $cart = $('#selected-seats'),
    $counter = $('#counter'),
    $total = $('#total');
    Tracker.autorun(()=>{
        let showSub = Meteor.subscribe('allShows');
        if(showSub.ready()){
            let seatObj = {};
            show = Shows.findOne();
            Session.set('showId', Shows.findOne()._id);
            Session.set('showCover', Shows.findOne().cover);
            Session.set('show',show);
            _.each(show.tickets,(item)=>{
                // if item has unique seat assignments
                if(item.classes){
                    const key = item.classes.substr(5);
                    seatObj[key] = item;
                }
            });
            console.log(show);
            let sc = $('.seating').seatCharts({
            map: show.seatmap,
                seats: seatObj,
                naming : {
                    top : false,
                    getLabel : function (character, row, column) {
                        return column;
                    },
                },
                legend : {
                    node : $('#legend'),
                    items : [
                        [ 'f', 'available',   'Regular' ],
                        [ 'g', 'available',   'Premium'],
                        [ 'f', 'unavailable', 'Already Booked']
                    ]					
                },
                click: function () {
                    if (this.status() === 'available') {
                        if(firstClick){
                            firstClick = false;
                        }
                        seats.push(this.settings);
                        Session.set('selectedSeats', seats);
                        $('<li>'+this.data().category+' Seat '+this.settings.id.substring(0,1)+this.settings.label+'<a href="" class="cancel-cart-item"> [Remove]</a></li>')
                            .attr('id', 'cart-item-'+this.settings.id)
                            .data('seatId', this.settings.id)
                            .appendTo($cart);
                        
                        $counter.text(sc.find('selected').length+1);
                        $total.text(recalculateTotal(sc)+this.data().price);
                        if(seats.length > 0){
                            $('.checkout-button').prop('disabled', false);
                        }else{
                            $('.checkout-button').prop('disabled', true);
                        }
                        return 'selected';
                    } else if (this.status() === 'selected') {
                        $counter.text(sc.find('selected').length-1);
                        $total.text(recalculateTotal(sc)-this.data().price);
                    
                        $('#cart-item-'+this.settings.id).remove();
                        const temp = seats.indexOf(this.settings);
                        seats.splice(temp,1);
                        if(seats.length > 0){
                            $('.checkout-button').prop('disabled', false);
                        }else{
                            $('.checkout-button').prop('disabled', true);
                        }
                        return 'available';
                    } else if (this.status() === 'unavailable') {
                        return 'unavailable';
                    } else {
                        return this.style();
                    }
                }
            });
            $('#A_12').prev().css('width','12.5px');
            $('#A_24').next().css('width','37.5px');
            $('#B_12').prev().css('width','12.5px');
            $('#B_24').next().css('width','37.5px');
            $('#F_11').prev().css('width','12.5px');
            $('#F_25').next().css('width','37.5px');
            $('#G_11').prev().css('width','12.5px');
            $('#G_25').next().css('width','37.5px');
            $('#H_11').prev().css('width','12.5px');
            $('#H_25').next().css('width','37.5px');
            $('#O_11').prev().css('width','12.5px');
            $('#O_25').next().css('width','37.5px');
            $('#BA_11').prev().css('width','12.5px');
            $('#BA_25').next().css('width','37.5px');
            //this will handle "[cancel]" link clicks
            $('#selected-seats').on('click', '.cancel-cart-item', function () {
                //let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
                sc.get($(this).parents('li:first').data('seatId')).click();
            });
            const cursor = Shows.find();
            cursor.observeChanges({
                added(id, fields){
                    sc.get(fields.taken).status('unavailable');
                },
                changed(id, fields){
                    sc.get(fields.taken).status('unavailable');
                }
            });
        }
    });
	
});

Template.showCheckout.helpers({
    'show': ()=>{
        return Shows.findOne();
    },
    'showId': function(){
        console.log(Session.get('showId'));
        return Session.get('showId');
    },
    'imageLink': function () {
        try{
            return Images.findOne({_id: Session.get('showCover')}).link();
        }catch(e){
            //console.log('error getting photo')
        }
    }
});

Template.showCheckout.events({
    'click .checkout-button': function(){
        Modal.show('bookingModal', Session.get('selectedSeats'));
    },
    'click .create-new-show-btn': function(){
        Modal.show('newShowModal');
    },
    'click .open-booking-details': function(){
        $('.booking-details').toggleClass('hidden-side');
    },
    'click .hide-booking-icon': function(){
        $('.booking-details').toggleClass('hidden-side');
    }
});

function recalculateTotal(sc) {
    var total = 0;
    //basically find every selected seat and sum its price
    sc.find('selected').each(function () {
        total += this.data().price;
    });
    
    return total;
}