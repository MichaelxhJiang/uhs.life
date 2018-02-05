import '../lib/seats.js';
import './experimental.html';
import { Template } from 'meteor/templating';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import DragSelect from 'dragselect';
import { Session } from 'meteor/session';
import { Random } from 'meteor/random';
import { Images } from "../../api/images/images";
let seats = [];
let show;
Template.sandbox.onRendered(function(){
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
                            $('.booking-details').toggleClass('hidden-side');
                            firstClick = false;
                        }
                        seats.push(this.settings);
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
            console.log('called');
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
            $('#testBtn').click((evt)=>{
                evt.preventDefault();
                sc.get(['BD_2', 'K_1', 'D_12', 'B_22']).status('unavailable');
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

Template.sandbox.helpers({
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

Template.sandbox.events({
    'click .checkout-button': function(){
        Modal.show('bookingModal', seats);
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
            if($(this).prev().hasClass('warning-label')){
                $(this).prev().fadeOut('fast');
            }
        }
     });
});

Template.bookingModal.helpers({
    'seats': function(){
        return this;
    },
    'seatNum': function(){
        return this.id.substring(0,1) + this.label;
    },
    'generalCost': function(){
        return this.data.price;
    },
    'ticketVariant': function(){
        const id = this.data.id;
        let variants = [];
        _.each(show.tickets, (item)=>{
            if(item.variantOf === id){
                variants.push(item);
            }
        });
        return variants;
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
            showId: Session.get('showId'),
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
                    alertError('Booking Failed', err.message);
                }else{
                    Modal.hide('bookingModal');
                    alertSuccess('Thank You!', 'We have sucessfully recorded the transaction.');
                }
            });
        }
    }
});

Template.newShowModal.onRendered(function(){
    $('.ticket-variant-container').hide();
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
    initPhotoUpload('showCoverPhoto',{
        number: 1,
        size: 8,
        message: "<i class='fa fa-upload fa-5x' style='display:block'></i>\nUpload a cover photo."
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
        $(this).before(
        "<div class='form-group flexed ticket-item' id='"+ randId() +"' data-index='"+ticketCount+"'>"+
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
            "<div class='form-item'>"+
            "<a href='' class='add-ticket-variant'>+ Add a Ticket Variant</a>"+
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
        $('.add-ticket-variant').click((evt)=>{
            evt.preventDefault();
            const id = $(evt.target).closest('.ticket-item').attr('id');
            $(evt.target).closest('.ticket-item').after(
            "<div class='form-group flexed ticket-item' data-ticket-variant='"+ id +"' id='"+ Random.id() +"' >"+
                "<div class='form-item'>"+
                    "<label>Name*</label>"+
                    "<input type='text' class='ticket-name required-input'>"+
                "</div>"+
                "<div class='form-item'>"+
                    "<label>Price*</label>"+
                    "<input type='number' class='ticket-price required-input'>"+
                "</div>"+
                "<div class='form-item'>"+
                    "<label>Additional Info</label>"+
                    "<input type='text' class='ticket-info'>"+
                "</div>"+
            "</div>");
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
        let spedex = 0;

        $('.ticket-item').each((index,element)=>{
            let ticketInfo = {
                price: parseInt($(element).find('.ticket-price').val()),
                category: $(element).find('.ticket-name').val(),
                info: $(element).find('.ticket-info').val(),
            };
            if($(element).attr('data-ticket-variant')){
                ticketInfo.variantOf = $(element).attr('data-ticket-variant');
            }else{
                ticketInfo.id = $(element).attr('id');
                ticketInfo.seats = seats[spedex];
                ticketInfo.classes = 'seat-'+ALPHABET.charAt(spedex);
                spedex++;
            }
            _.each(seatArr[index],(seatId)=>{
                const rowId = seatId.substring(0,seatId.indexOf('_'));
                const i = ROWS.indexOf(rowId);
                seatMap[i] = seatMap[i].replaceAt(parseInt(seatId.replace( /^\D+/g, ''))-1,ALPHABET.charAt(index));
            });
            tickets.push(ticketInfo);
        });
        // this should be the last step after everything is validated, and ready to submit or send to backend;
        
        let json = {
            title: $('#showTitle').val(),
            summary: $('#showSummary').val(),
            date: $('#showDate').val(),
            time: $('#showTime').val(),
            cover: Session.get('newShowCoverId'),
            cast: cast,
            tickets: tickets,
            finePrint: $('#showFine').val()
        };
        const ticketSchema = new SimpleSchema({
            price: {
                type: Number,
                min: 0,
                label: "Ticket price"
            },
            category: {
                type: String,
                min: 1,
                max: 50,
                label: "Ticket Name"
            },
            classes: {
                type: String,
                regEx: /seat-[a-z]/,
                optional: true
            },
            info: {
                type: String,
                optional: true,
                max: 500,
                label: "Ticket details"
            },
            seats: {
                type: [String],
                optional: true,
            },
            variantOf: {
                type: String,
                optional: true
            },
            id: {
                type: String,
                optional: true
            }
        });
        const castSchema = new SimpleSchema({
            name: {
                type: String,
                min: 1,
                max: 50,
                label: "Cast name"
            },
            role: {
                type: String,
                min: 1,
                max: 50,
                label: "Cast Role"
            },
            grade: {
                type: String,
                min: 1,
                max: 10,
                label: "Cast Grade"
            },
            intro: {
                type: String,
                min: 1,
                max: 500,
                label: "Cast Introduction"
            },
            image: {
                type: String,
                optional: true,
                label: "Cast Image"
            }
        });
        const showSchema = new SimpleSchema({
            title: {
                type: String,
                min: 1,
                max: 50,
                label: "Title"
            },
            summary: {
                type: String,
                min: 1,
                max: 5000,
                label: "Summary"
            },
            date: {
                type: String,
                min:1,
                max: 20,
                label: "Date"
            },
            time:{
                type: String,
                min: 4,
                max: 5,
                label: "Show Time"
            },
            cover: {
                type: String,
                min: 1,
                label: "Cover Photo"
            },
            cast: {
                type: [castSchema],
                optional: true,
                label: "Cast Information"
            },
            tickets: {
                type: [ticketSchema],
                minCount: 1,
                maxCount: 6,
                label: "Ticket Information"
            },
            finePrint: {
                type: String,
                max: 10000,
                optional: true,
                label: "Fine Print"
            }
        });
        try{
            check(json, showSchema);
            console.log('passed');
            for(let i = 0; i < seatMap.length; i++){ // every row
                let count = 1;
                for(let j = 0; j < seatMap[i].length; j++){
                    if(/[a-z]/g.test(seatMap[i].charAt(j))){
                        seatMap[i] = seatMap[i].insert(j+1,'[,'+ count+']');
                        count++;
                    }
                }
            }
            json.seatmap = seatMap;
            console.log(seatMap);
            Meteor.call('shows.createShow',json,(err)=>{
                if(err){
                    alertError("Failed to create a new show", err.message);
                }else{
                    Modal.hide('newShowModal');
                    alertSuccess("Show has been successfully created", "Check show administration page for more details.");
                }
            });
        }catch(e){
            alertError("Failed to create show, ", e.message.substring(e.message.indexOfEnd('Match error: Match error: ')));
        }
        console.log(json);
    });
    $('.add-ticket-variant').click((evt)=>{
        evt.preventDefault();
        const id = $(evt.target).closest('.ticket-item').attr('id');
        $(evt.target).closest('.ticket-item').after(
        "<div class='form-group flexed ticket-item' data-ticket-variant='"+ id +"' id='"+ Random.id() +"'>"+
            "<div class='form-item'>"+
                "<label>Name*</label>"+
                "<input type='text' class='ticket-name required-input'>"+
            "</div>"+
            "<div class='form-item'>"+
                "<label>Price*</label>"+
                "<input type='number' class='ticket-price required-input'>"+
            "</div>"+
            "<div class='form-item'>"+
                "<label>Additional Info</label>"+
                "<input type='text' class='ticket-info'>"+
            "</div>"+
        "</div>");
    });
    $('.ticket-name').blur((evt)=>{
        if($(evt.target).val()) {
            $('.add-ticket-variant').fadeIn('fast');
            $('#ticketVariant').append(new Option($(evt.target).val(),$(evt.target).val(),false,false));
        }
    });
});


function randId() {
    return Random.id();
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
    if (index > 0){
        return this.substring(0, index) + string + this.substring(index, this.length);
    }else{
        return string + this;
    }
};
function initPhotoUpload(id, info) {
    return new Dropzone("form#" + id, {
        maxFiles: info.number || 1,
        maxFilesize: info.size || 8,
        thumbnailWidth: 400,
        addRemoveLinks: true,
        dictDefaultMessage: info.message || "Drop your image here, or click to select an image using the browser.",
        accept: function (file, done) {
            $('.quick-image-prompt').html('');
            const uploader = Images.insert({
                file: file,
                streams: 'dynamic',
                chunkSize: 'dynamic'
            }, false);
            uploader.on('end', function (error, fileObj) {
                if (error) {
                    alert('Error during upload: ' + error);
                } else {
                    Session.set('newShowCoverId', fileObj._id); //update the image id to current image
                    done();
                }
            });
            uploader.on('error', function (error) {
                alert('Error during upload: ' + error);
            });
            uploader.start();
        }
    });
};