/**
 * Created by Yonglin Wang on 7/31/2017.
 */
import './stream.html'

Template.stream.helpers({
    'userInfo': function () {
        console.log(Meteor.user());
        return Meteor.user();
    }
})

Template.stream.events({
    'click .logout': function (evt) {
        evt.preventDefault();
        Meteor.logout();
        FlowRouter.reload();
    }
});