import '../lib/seats.js';
import './experimental.html';
import { Template } from 'meteor/templating';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import DragSelect from 'dragselect';
let seats = [];
Template.sandbox.onRendered(function(){
    $(document).ready(function() {
        var $cart = $('#selected-seats'),
            $counter = $('#counter'),
            $total = $('#total'),
            sc = $('.seating').seatCharts({
            map: [
                'f[,1]f[,2]f[,3]f[,4]f[,5]____f[,6]f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]____f[,22]f[,23]f[,24]f[,25]f[,26]',
                'f[,1]f[,2]f[,3]f[,4]f[,5]____f[,6]f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]____f[,22]f[,23]f[,24]f[,25]f[,26]',
                'f[,1]f[,2]f[,3]f[,4]f[,5]____f[,6]f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]____f[,22]f[,23]f[,24]f[,25]f[,26]',
                'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]____f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]___f[,22]f[,23]f[,24]f[,25]f[,26]f[,27]',
                '__________________________________',
                '__________________________________',
                'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]______________________f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]',
                'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]____f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]___f[,22]f[,23]f[,24]f[,25]f[,26]f[,27]',
                'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]__f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]__f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]',
                'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]__f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]__f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]',
                'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]__f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]__f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]',
                'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]__f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]__f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]',
                'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]__f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]__f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]',
                'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]___f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]__f[,23]f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]',
                'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]f[,8]__f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]_f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]f[,31]',
                'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]f[,8]__f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]_f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]f[,31]',
                'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]f[,8]__f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]__f[,23]f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]',
                '_f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]__f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]__f[,22]f[,23]f[,24]f[,25]f[,26]f[,27]f[,28]_',
                '__f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]__f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]__f[,21]f[,22]f[,23]f[,24]f[,25]f[,26]__',
                '____f[,1]f[,2]f[,3]f[,4]___f[,5]f[,6]f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]__f[,18]f[,19]f[,20]f[,21]____',
                '___________f[,5]f[,6]f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]__________',
            ],
            seats: {
                f: {
                    price   : 15,
                    classes : 'regular-seat', //your custom CSS class
                    category: 'Regular'
                },
                e: {
                    price   : 30,
                    classes : 'premium-seat', //your custom CSS class
                    category: 'Premium'
                }					
            
            },
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
                    [ 'e', 'available',   'Premium'],
                    [ 'f', 'unavailable', 'Already Booked']
                ]					
            },
            click: function () {
                if (this.status() === 'available') {
                    seats.push(this.settings);
                    //let's create a new <li> which we'll add to the cart items
                    $('<li>'+this.data().category+' Seat '+this.settings.id.substring(0,1)+this.settings.label+'<a href="#" class="cancel-cart-item"> [Remove]</a></li>')
                        .attr('id', 'cart-item-'+this.settings.id)
                        .data('seatId', this.settings.id)
                        .appendTo($cart);
                    
                    /*
                        * Lets update the counter and total
                        *
                        * .find function will not find the current seat, because it will change its stauts only after return
                        * 'selected'. This is why we have to add 1 to the length and the current seat price to the total.
                        */
                    $counter.text(sc.find('selected').length+1);
                    $total.text(recalculateTotal(sc)+this.data().price);
                    
                    return 'selected';
                } else if (this.status() === 'selected') {
                    //update the counter
                    $counter.text(sc.find('selected').length-1);
                    //and total
                    $total.text(recalculateTotal(sc)-this.data().price);
                
                    //remove the item from our cart
                    $('#cart-item-'+this.settings.id).remove();
                    const temp = seats.indexOf(this.settings);
                    seats.splice(temp,1);
                    //seat has been vacated
                    return 'available';
                } else if (this.status() === 'unavailable') {
                    //seat has been already booked
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
        //let's pretend some seats have already been booked
        sc.get(['BD_2', 'K_1', 'D_12', 'B_22']).status('unavailable');
    });
	
});

Template.sandbox.events({
    'click .checkout-button': function(){
        Modal.show('bookingModal', seats);
    },
    'click .create-new-show-btn': function(){
        Modal.show('newShowModal');
    }
});

Template.bookingModal.onRendered(function(){
    let count = 0, sum = 0;
    _.each($('.ticket-cost'),function(){
        count++;
    });
    $('#ticketCount').text(count);
    $('#bookingSum').text(sum);
    $('.select-booking').select2({
        placeholder: "Click to select",
        minimumResultsForSearch: -1
    });
    $('.select-booking').on("select2:select", function(e) {
        $(e.target).parent().parent().prev().find('.no-select').fadeOut('fast', function(){
            const cost = $($(e.target).select2('data')[0].element).attr('data-cost');
            //optimize the following two lines with parentUntil
            let $prompt = $(e.target).parent().parent().prev().find('.ticket-cost');
            $prompt.text(cost);
            $prompt.fadeIn('fast');
            let count = 0, sum = 0;
            _.each($('.ticket-cost'),function(){
                sum += parseInt($($('.ticket-cost')[count]).text());
                count++;
            });
            $('#bookingSum').text(sum);
        });
     });
     $('.required-input').blur(function(){
        if(!$(this).val()) {
            if(!$(this).hasClass('warning')){
                $(this).addClass('warning');
                $(this).before("<label class='warning-label' hidden>This field is required</label>");
                $(this).prev().fadeIn('fast');
            }
        }else{
            $(this).removeClass('warning');
            $(this).prev().slideUp('fast');
        }
     });
});

Template.bookingModal.helpers({
    'seats': function(){
        return this;
    },
    'seatNum': function(){
        return this.id.substring(0,1) + this.label;
    }
});

Template.bookingModal.events({
    'click .add-req-trigger': function(evt){
        $(evt.target).hide();
        $(evt.target).next().fadeIn('slow');
    },
    'submit .booking-form': function(evt){
        evt.preventDefault();
        let customers = [];
        _.each(seats, function(item){
            // If no more action is going to be added to this operation, combine the following two lines of operation
            const json = {
                name: $('#name_'+item.id).val(),
                seatId: item.id,
                type: $('#type_'+item.id).val(),
                payType: $('#payment_'+item.id).val(),
                comment: $('#request_'+item.id).val(),
                reference: $('#seller').val(),
                discount: $('#discountCode').val()
            };
            customers.push(json);
        });
        let seatArr = [];
        _.each(seats, function(item){
            seatArr.push(item.id);
        });
        const transactionData = {
            timestamp: new Date(),
            showId: 'TODO get show Id',
            seats: seatArr,
            sellerId: $('#seller').val(),
            customers: customers,
            discount: $('#discountCode').val()
        };
        console.log(transactionData);
        const cs = new SimpleSchema({
            name:{
                type: String,
                min: 1,
                label: 'Cusomer name'
            },
            type:{
                type: String,
                min: 1,
                label: 'Customer Type'
            },
            seatId:{
                type: String,
                min: 1,
                label: 'Customer Seat ID'
            },
            comment: {
                type: String,
                max: 250,
                label: "Customer Request",
                optional: true
            },
            reference: {
                type: String,
                min: 1,
            },
            payType: {
                type: String,
                label: "Customer Preferred Payment method",
                min: 1,
            },
            discount: {
                type: String,
                optional: true,
                max: 20,
                label: "Discount Code"
            }
        });
        const ts = new SimpleSchema({
            timestamp:{
                type: Date,
                label: 'When was this ticket sold',
            },
            showId:{
                type: String,
                min: 1,
                label: 'Show Time'
            },
            seats:{
                type: [String],
                min: 1,
                label: 'Seat Selection'
            },
            sellerId:{
                type: String,
                min: 1,
                label: 'Ticket Seller'
            },
            customers:{
                type: [cs],
                min: 1,
                label: 'Customers'
            },
            discount: {
                type: String,
                optional: true,
                max: 20,
                label: "Discount Code"
            }
        });
        let checked = true;
        try{
            check(transactionData, ts);
        }catch(e){
            checked = false;
            const message = e.message.substring(e.message.indexOfEnd('Match error: Match error: '));
            alertError("Oops", message);
        }
        if(checked){
            Meteor.call('booking.addTransaction', transactionData, function(err){
                if(err){
                    alertError('Booking Failed', err.message)
                }
            });
        }
    }
});

Template.newShowModal.onRendered(function(){
    let seatMap = [
        'fffff____ffffffffffffffff____fffff',
        'fffff____ffffffffffffffff____fffff',
        'fffff____ffffffffffffffff____fffff',
        'ffffff____fffffffffffffff___ffffff',
        '__________________________________',
        '__________________________________',
        'ffffff______________________ffffff',
        'ffffff____fffffffffffffff___ffffff',
        'fffffff__ffffffffffffffff__fffffff',
        'fffffff__ffffffffffffffff__fffffff',
        'fffffff__ffffffffffffffff__fffffff',
        'fffffff__ffffffffffffffff__fffffff',
        'fffffff__ffffffffffffffff__fffffff',
        'fffffff___fffffffffffffff__fffffff',
        'ffffffff__fffffffffffffff_ffffffff',
        'ffffffff__fffffffffffffff_ffffffff',
        'ffffffff__ffffffffffffff__ffffffff',
        '_fffffff__ffffffffffffff__fffffff_',
        '__ffffff__ffffffffffffff__ffffff__',
        '____ffff___fffffffffffff__ffff____',
        '___________fffffffffffff__________',
    ];
    $('#showDate').datepicker({
        startDate: '+0d'
    });
    initBooking();

    let smallchart = $('.seats-small').seatCharts({
        map: [
            'f[,1]f[,2]f[,3]f[,4]f[,5]____f[,6]f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]____f[,22]f[,23]f[,24]f[,25]f[,26]',
            'f[,1]f[,2]f[,3]f[,4]f[,5]____f[,6]f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]____f[,22]f[,23]f[,24]f[,25]f[,26]',
            'f[,1]f[,2]f[,3]f[,4]f[,5]____f[,6]f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]____f[,22]f[,23]f[,24]f[,25]f[,26]',
            'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]____f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]___f[,22]f[,23]f[,24]f[,25]f[,26]f[,27]',
            '__________________________________',
            '__________________________________',
            'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]______________________f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]',
            'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]____f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]___f[,22]f[,23]f[,24]f[,25]f[,26]f[,27]',
            'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]__f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]__f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]',
            'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]__f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]__f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]',
            'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]__f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]__f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]',
            'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]__f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]__f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]',
            'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]__f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]__f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]',
            'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]___f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]__f[,23]f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]',
            'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]f[,8]__f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]_f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]f[,31]',
            'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]f[,8]__f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]f[,23]_f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]f[,31]',
            'f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]f[,8]__f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]f[,22]__f[,23]f[,24]f[,25]f[,26]f[,27]f[,28]f[,29]f[,30]',
            '_f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]f[,7]__f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]f[,21]__f[,22]f[,23]f[,24]f[,25]f[,26]f[,27]f[,28]_',
            '__f[,1]f[,2]f[,3]f[,4]f[,5]f[,6]__f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]f[,18]f[,19]f[,20]__f[,21]f[,22]f[,23]f[,24]f[,25]f[,26]__',
            '____f[,1]f[,2]f[,3]f[,4]___f[,5]f[,6]f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]__f[,18]f[,19]f[,20]f[,21]____',
            '___________f[,5]f[,6]f[,7]f[,8]f[,9]f[,10]f[,11]f[,12]f[,13]f[,14]f[,15]f[,16]f[,17]__________',
        ],
        seats: {
            f: {
                price   : 15,
                classes : 'new-seat', //your custom CSS class
                category: 'Regular'
            },
            e: {
                price   : 30,
                classes : 'premium-seat', //your custom CSS class
                category: 'Premium'
            }					
        
        },
        naming : {
            top : false,
            getLabel : function (character, row, column) {
                return column;
            },
        }
    });
    let buffer = [];
    let seatArr = [];
    let taken = [];
    let ticketCount = 1;
    let workingIndex = 0;
    const colorList = ['#009688','#673AB7','#00BCD4','#4CAF50','#FFEB3B','#FF9800','#f44336'];
    let drag = new DragSelect({
        selectables: document.getElementsByClassName('new-seat'),
        onElementSelect: function(element) {
            let $seat = $(element);
            if($seat.attr('data-painted') !== 'yes'){
                buffer.push($seat.attr('id'));
                $seat.css('background-color', colorList[workingIndex]);
                $seat.attr('data-painted','yes');
            }
        }
    });
    drag.stop();

    $('.ticket-item').attr('id', randId());
    $('.confirm-select').click(function(evt){
        evt.preventDefault();
        buffer = _.difference(buffer, taken); // sanitize buffer array, redundancy
        seatArr[workingIndex] = buffer;
        smallchart.get(buffer).status('unavailable');
        // Push all new seats to another array, redundancy
        _.each(buffer, (item)=>{
            taken.push(item);
        });
        buffer = []; // empty buffer data;
        $('.seatmap-container').fadeOut('fast');
        drag.stop();
        console.log(seatArr);
    });
    $('.remove-select').click((evt)=>{
        evt.preventDefault();
        _.each(buffer,(item)=>{
            let $seat = $(evt.target).closest('.seatmap-container').find('#'+item);
            $seat.css('background-color', '#B9DEA0');
            $seat.attr('data-painted','no');
        });
        buffer = [];
    });
    $('.open-seatmap').click(function(evt){
        evt.preventDefault();
        workingIndex = parseInt($(evt.target).closest('.ticket-item').attr('data-index'));
        $('.seatmap-container').fadeIn('fast');
        drag.start();
    });
    $('.close-window').click(function(evt){
        evt.preventDefault();
        $('.seatmap-container').fadeOut('fast');
        drag.stop();
    });

    let hidden = false;
    $('.add-new-cast').click(function(evt){
        evt.preventDefault();
        if(!hidden){
            $(this).prev().hide();
            hidden = true;
        }
        
        $(this).before("<div class='form-group flexed cast-member'>"+
            "<div class='form-item'>"+
                "<label>Name</label>"+
                "<input type='text' class='cast-name required-input' maxlength='50'>"+
            "</div>"+
            "<div class='form-item'>"+
                "<label>Role</label>"+
                "<input type='text' class='cast-role required-input' maxlength='50'>"+
            "</div>"+
            "<div class='form-item'>"+
                "<label>Grade</label>"+
                "<select class='select-booking required-input cast-grade'>"+
                    "<option value=''></option>"+
                    "<option>Grade 9</option>"+
                    "<option>Grade 10</option>"+
                    "<option>Grade 11</option>"+
                    "<option>Grade 12</option>"+
                    "<option>Other</option>"+
                "</select>"+
            "</div>"+
            "<div class='form-item'>"+
                "<label>Introduction</label>"+
                "<input type='text' class='cast-intro' maxlength='250'>"+
            "</div>"+
        "</div>");
        initBooking();
    });

    $('.add-new-ticket').click(function(evt){
        evt.preventDefault();
        $(this).before("<div class='form-group flexed ticket-item' id='"+ randId() +"' data-index='"+ticketCount+"'>"+
            "<div class='form-item'>"+
                "<label>Name*</label>"+
                "<input type='text' class='ticket-name required-input'>"+
            "</div>"+
            "<div class='form-item'>"+
                "<label>Price*</label>"+
                "<input type='number' class='ticket-price required-input'>"+
            "</div>"+
            "<div class='form-item'>"+
                "<label>Select Seats*</label>"+
                "<button class='btn btn-green btn-wide open-seatmap'>Show Seat Map</button>"+
            "</div>"+
            "<div class='form-item'>"+
                "<label>Additional Info</label>"+
                "<input type='text' class='ticket-info'>"+
            "</div>"+
        "</div>");
        ticketCount++;
        seatArr.push([]);
        $('.open-seatmap').click(function(evt){
            evt.preventDefault();
            workingIndex = parseInt($(evt.target).closest('.ticket-item').attr('data-index'));
            $('.seatmap-container').fadeIn('fast');
            drag.start();
        });
    });
    $('#showTitle').blur(function(){
        if($(this).val()) {
            $('.show-title').text('- ' + $(this).val());
            $('.show-title').fadeIn('fast');
        }
    });
    $('.new-show-form').on('submit', (evt)=>{
        evt.preventDefault();
        let cast = [];
        $('.cast-member').each((index,element)=>{
            const member = {
                name: $(element).find('.cast-name').val(),
                role: $(element).find('.cast-role').val(),
                grade: $(element).find('.cast-grade').val(),
                intro: $(element).find('.cast-intro').val()
            };
            cast.push(member);
        });
        let tickets = [];
        const ROWS = ['BD', 'BC', 'BB', 'BA', ' ', ' ', 'P','O','N','M','L','K','J','H','G','F','E','D','C','B','A'];
        const ALPHABET = 'fghijklmnopqrstuvwxyzabcde';
        $('.ticket-item').each((index,element)=>{
            const ticketInfo = {
                price: $(element).find('.ticket-price').val(),
                category: $(element).find('.ticket-name').val(),
                classes: 'seat-'+ALPHABET.charAt(index),
                info: $(element).find('.ticket-info').val(),
                seats: seatArr[index]
            };
            _.each(seatArr[index],(seatId)=>{
                const rowId = seatId.substring(0,seatId.indexOf('_'));
                const i = ROWS.indexOf(rowId);
                seatMap[i] = seatMap[i].replaceAt(parseInt(seatId.replace( /^\D+/g, ''))-1,ALPHABET.charAt(index));
            });
            tickets.push(ticketInfo);
        });
        // this should be the last step after everything is validated, and ready to submit or send to backend;
        for(let i = 0; i < seatMap.length; i++){ // every row
            let count = 1;
            for(let j = 0; j < seatMap[i].length; j++){
                if(/[a-z]/g.test(seatMap[i].charAt(j))){
                    seatMap[i] = seatMap[i].insert(j+1,'[,'+ count+']');
                    count++;
                }
            }
        }
        console.log(seatMap);
        let json = {
            title: $('#showTitle').val(),
            summary: $('#showSummary').val(),
            date: $('#showDate').val(),
            time: $('#showTime').val(),
            cover: 'TODO Cover Photo ID',
            cast: cast,
            tickets: tickets,
            finePrint: $('#showFine').val()
        };
        console.log(json);
    });
});


function randId() {
    return Math.random().toString(36).substr(2, 10);
}
function recalculateTotal(sc) {
    var total = 0;
    //basically find every selected seat and sum its price
    sc.find('selected').each(function () {
        total += this.data().price;
    });
    
    return total;
}

function initBooking(){
    $('.select-booking').select2({
        placeholder: "Click to select",
        minimumResultsForSearch: -1
    });
    $('.required-input').blur(function(){
        if(!$(this).val()) {
            if(!$(this).hasClass('warning')){
                $(this).addClass('warning');
                $(this).before("<label class='warning-label' hidden>This field is required</label>");
                $(this).prev().fadeIn('fast');
            }
        }else{
            $(this).removeClass('warning');
            if($(this).prev().hasClass('warning-label')){
                $(this).prev().fadeOut('fast');
            }
        }
    });
}

String.prototype.indexOfEnd = function(string) {
    const io = this.indexOf(string);
    return io === -1 ? -1 : io + string.length;
};

String.prototype.found = function(string){
    return this.indexOf(string) !== -1;
};

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
};

String.prototype.insert = function (index, string) {
    if (index > 0)
      return this.substring(0, index) + string + this.substring(index, this.length);
    else
      return string + this;
  };