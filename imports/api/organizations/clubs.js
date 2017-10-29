/**
 * Created by Yonglin Wang on 9/16/2017.
 */
export const Clubs = new Mongo.Collection('clubs');

if(Meteor.isServer){
    Meteor.publish('allClubs', function clubsPublication(limit) {
        return Clubs.find({},{
            limit: limit
        })
    });
}

Clubs.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});
