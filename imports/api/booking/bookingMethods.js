import { Booking } from './booking.js';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

if(Meteor.isServer){
    Meteor.methods({
        'booking.addTransaction': function(details){
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
            let json = details, customers = details.customers;
            // TODO double check seat avaliability and all input matches show database record, then reserve the seat to reflect the new map.

            // calculate the costs and store them in the object
            let total = 0;
            _.each(customers, function(item){
                // TODO connect these with show database
                item.subTotal = 12;
                item.grandTotal = 12;
                item.tracking = {
                    delivery: "pending",
                    payment: "notPaid",
                    refund: "notRequested",
                    newTicket: "notRequested"
                };
                total += item.grandTotal;
            });

            json.customers = customers;
            json.amount = total;
            json.ticketCount = json.seats.length;
            console.log(json);
        }
    });
}