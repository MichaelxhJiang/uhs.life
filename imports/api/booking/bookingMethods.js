import { Transactions } from './booking.js';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Shows } from './shows';

/*

    The following is all the apis that clients can use to access the
    booking system.

*/

if(Meteor.isServer){
    Meteor.methods({
        'booking.addTransaction': function(details){
            // The schemas are used to check inputs, if they do not satisfy the defined pattern, they will be rejected and client will be notified
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
            check(details, ts);
            // Creating buffer to store the transaction input for processing
            let json = details, 
                customers = details.customers;
            const theShow = Shows.findOne({'_id': details.showId});
            // Check to make sure that all seats in the order are not already taken
            _.each(details.seats,(seat)=>{
                if(_.contains(theShow.taken,seat)){
                    // if we fine a repeating seat order, the order is rejected.
                    throw new Meteor.Error(400, "Seat has already been taken, please select another one.");
                }
            });
            // calculate the costs and store them in the object
            let total = 0;
            _.each(customers, function(item){
                let inputCheck = true;
                try{
                    const ticketInfo = _.findWhere(theShow.tickets, {category: item.type});
                    item.subTotal = ticketInfo.price;
                    item.grandTotal = ticketInfo.price;
                }catch(e){
                    inputCheck = false;
                }
                if(!inputCheck){
                    throw new Meteor.Error(400, "Failed to retrieve ticket information, please double check that the ticket options are valid.")
                }
                // Tracking info initialized
                item.tracking = {
                    delivery: "pending",
                    payment: "notPaid",
                    refund: "notRequested",
                    newTicket: "notRequested"
                };
                total += item.grandTotal;
            });
            // Add the culmulated information
            json.customers = customers;
            json.amount = total;
            json.ticketCount = json.seats.length;
            // Update the show database
            Shows.update({'_id': details.showId},{
                $push: {
                    taken: {
                        $each: details.seats
                    }
                }
            },{multi: true},function(err){
                if(err){
                    console.log(err.message);
                    throw new Meteor.Error(500, "Failed to book seats, please contact the administrators.");
                }else{
                    Transactions.insert(json,function(err){
                        if(err){
                            throw new Meteor.Error(500, "Something went wrong on our end, please contact administrators.");
                        }
                    });
                }
            });
            console.log('Successfully inserted', json);
        },
        'booking.wipeTransactions': function(){

        }
    });
}