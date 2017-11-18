/**
 * Created by Yonglin Wang on 11/10/2017.
 */
import "./profile.html";

Template.profile.onRendered(function () {
    setTitle("All About You");
    Tracker.autorun(function () {
        let clubSub = Meteor.subscribe('allClubs',1000);
        let categorySub = Meteor.subscribe('categories');
        const user = Meteor.user();
        if(user && clubSub.ready() && categorySub.ready()){
            $('#clubInterest').select2({
                placeholder: "Click to select the clubs you want to receive notifications about",
                allowClear: true
            });
            $('#categoryInterest').select2({
                placeholder: "Click to select the categories you want to receive notifications about",
                allowClear: true
            });
            $("#categoryInterest").val(user.private.categories).trigger("change");
            $("#clubInterest").val(user.private.clubs).trigger("change");
        }
    });
    let clubs = Clubs.find({});
    clubs.observeChanges({
        added: function (id, fields) {
            let newCat = new Option(fields.name, fields.name);
            $('#clubInterest').append(newCat);
        }
    });
    let categories = Categories.find({});
    categories.observeChanges({
        added: function (id, fields) {
            let newCat = new Option(fields.name, fields.name);
            $('#categoryInterest').append(newCat);
        }
    });
    $('#clubInterest').select2({
        placeholder: "Click to select the clubs you want to receive notifications about",
        allowClear: true
    });
    $('#categoryInterest').select2({
        placeholder: "Click to select the categories you want to receive notifications about",
        allowClear: true
    });
});

Template.profile.helpers({
    'user': function () {
        return Meteor.user();
    }
});

Template.profile.events({
    'submit #updateNotificationForm': function (evt) {
        evt.preventDefault();
        const categories = $('#categoryInterest').val();
        const clubs = $('#clubInterest').val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"private.categories": categories, "private.clubs": clubs}}, function (err) {
            if(err){
                alertError("Error Occurred when updating your profile", err.message);
            }else {
                alertSuccess("Thank you!", "We have recorded the information you provided");
            }
        });
    }
});