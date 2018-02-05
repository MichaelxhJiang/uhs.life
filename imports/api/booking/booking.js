export const Transactions = new Mongo.Collection('transactions');

if (Meteor.isServer) {
    Meteor.publish('allTransactions', function allTransactionsPublication() {
        //TODO add roles authentication
        return Transactions.find({});
    });
    Meteor.publish('myTransactions', function myTransactionsPublication(){
        return Transactions.find({'seller': this.userId});
    });
    Meteor.publish('transactionsByShow', function showTransactions(showID){
        return Transactions.findOne({'showId': showID});
    });
}