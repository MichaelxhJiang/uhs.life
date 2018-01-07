export const Shows = new Mongo.Collection('shows');

if (Meteor.isServer) {
    Meteor.publish('allShows', function allTransactionsPublication() {
        //TODO add roles authentication
        return Shows.find({});
    });
    Meteor.publish('showByName', function allTransactionsPublication(name) {
        //TODO add roles authentication
        return Shows.find({'name': name});
    });
    Meteor.publish('allSeatMaps', function myTransactionsPublication(){
        return Shows.find({},{
            fields:{
                takenSeats: 1
            }
        });
    });
}