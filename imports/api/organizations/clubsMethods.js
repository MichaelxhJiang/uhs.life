/**
 * Created by Yonglin Wang on 9/16/2017.
 */
import { Clubs } from './clubs.js'

if(Meteor.isServer){
    Meteor.methods({
        'clubs.add': function (json) {
            if(!Roles.userIsInRole(this.userId,'admin')){
                throw Meteor.Error(403, "Your account is not allowed to do so.")
            }
            Clubs.insert(json);
        },
        'clubs.remove': function (id) {
            if(!Roles.userIsInRole(this.userId,'admin')){
                throw Meteor.Error(403, "Your account is not allowed to do so.")
            }
            Clubs.remove(id);
        }
    })
}