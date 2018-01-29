import {Shows} from './shows';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {check} from 'meteor/check';
if(Meteor.isServer){
    Meteor.methods({
        'shows.createShow': function(details){
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
                },
                seatmap: {
                    type: [String],
                    label: "Seat Map"
                }
            });
            check(details, showSchema);
            let buffer = details;
            buffer.taken = [];
            Shows.insert(buffer,(err)=>{
                if(err){
                    throw new Meteor.Error(500, "Something is wrong on our side, we are really sorry...");
                }
            });
        }
    });
}
