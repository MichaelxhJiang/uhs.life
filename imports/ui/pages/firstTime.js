/**
 * Created by Yonglin Wang on 8/3/2017.
 */
import './firstTime.html'

Template.firstTime.onRendered(function () {
    Tracker.autorun(function () {
        let courseSub = Meteor.subscribe('allCourses',1000);
        let clubSub = Meteor.subscribe('allClubs',1000);
        if(courseSub.ready() && clubSub.ready()){
            let courses = Courses.find({});
            let clubs = Clubs.find({});
            courses.observeChanges({
                added: function (id, fields) {
                    let newCat = new Option(fields.name + " - " + fields.code, fields.code);
                    $('#firstCourseSelect').append(newCat)
                }
            });
            clubs.observeChanges({
                added: function (id, fields) {
                    let newCat = new Option(fields.name, fields.code);
                    $('#firstClubSelect').append(newCat)
                }
            })
        }
    });
    $('#firstCourseSelect').select2({
        placeholder: "Click to select matching categories",
        allowClear: true
    });
    $('#firstClubSelect').select2({
        placeholder: "Click to select matching categories",
        allowClear: true
    });
});

Template.firstTime.events({
    'click #startFirst': function (evt,template) {
        evt.preventDefault();
        swapElements('#firstIntro','#teachIntro');
        swapElements('#beginIntro','#teachAssistInfo');
    },
    'click #skipNext': function (evt,template) {
        evt.preventDefault();
        swapElements('#teachIntro', '#emailIntro');
        swapElements('#teachAssistInfo', '#subscriptionEmail');
    },
    'click #skipEmail': function (evt,template) {
        evt.preventDefault();
        const user = Meteor.user();
        $('#introName').val(user.services.google.name);
        $('#introStudentNum').val(user.profile.student_number);
        $('#introSubEmail').val(user.profile.email);
        swapElements('#emailIntro', '#confirmIntro');
        swapElements('#subscriptionEmail', '#confirmDetails');
    },
    'submit #teachAssistForm': function (evt) {
        evt.preventDefault();
        const user = $('#teachUser').val();
        const pass = $('#teachPass').val();
        $('.teach-assist-login').fadeOut('fast', function () {
           $('.teachLoader').fadeIn('slow')
        });
        Meteor.call('getTeachAssistTokens', {student_number: user, password: pass}, function (err, data) {
            if(err){
                alertError("Failed to connect with teach assist", err.message);
                $('.teachLoader').fadeOut('fast', function () {
                    $('.teach-assist-login').fadeIn('slow')
                });
            }else{
                Meteor.users.update({_id: Meteor.userId()}, {$set: {"private.token": data, "private.tokenDate": new Date()}}, function (err) {
                    if(err){
                        alertError("Something went wrong", "You can connect your account anytime later");
                        swapElements('#teachIntro', '#emailIntro');
                        swapElements('#teachAssistInfo', '#subscriptionEmail');
                    }else{
                        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.student_number": user}});
                        Meteor.call('getTeachAssistCourses', data, function (err,data) {
                            if(err){
                                alertError("Something went wrong", "You can connect your account anytime later");
                                swapElements('#teachIntro', '#emailIntro');
                                swapElements('#teachAssistInfo', '#subscriptionEmail');
                            }else{
                                Meteor.users.update({_id: Meteor.userId()}, {$set: {"private.courses": data}});
                                alertSuccess("Yeah!", 'We have successfully connected you and teach assist, however further login will be required since token may expire.');
                                swapElements('#teachIntro', '#emailIntro');
                                swapElements('#teachAssistInfo', '#subscriptionEmail');
                            }
                        })
                    }
                });
            }
        })
    },
    'submit #organizationsForm': function (evt) {
        evt.preventDefault();
        const courses = $('#firstCourseSelect').val();
        const clubs = $('#firstClubSelect').val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.courses": courses, "profile.clubs": clubs}}, function (err) {
            if(err){
                alertError("Error Occurred when updating your profile", err.message)
            }else {
                alertSuccess("Thank you!", "We have recorded the information you provided")
            }
        });
    },
    'submit #newsletterEmailForm': function (evt) {
        evt.preventDefault();
        let email = $('#personalEmail').val();
        let userInfo = Meteor.user().services.google;
        if(!validateEmail(email)){
            alertError("Sorry...", "The email you entered is unacceptable.")
        }else{
            Meteor.call('news.addSubscriber', email, userInfo.given_name, userInfo.family_name, function (err) {
                if(err){
                    alertError("Something went wrong", err.message + "\nYou can subscribe to the newsletter anytime later.")
                }else{
                    Session.set('personalEmail', email);
                    alertSuccess("Great!", "We have signed you up for newsletters!");
                    swapElements('#emailIntro', '#confirmIntro');
                    swapElements('#subscriptionEmail', '#confirmDetails');
                }
            })
        }
    },
    'submit #finalForm': function (evt,template) {
        evt.preventDefault();
        if(document.getElementById('checkboxTerms').checked){
            let id = Meteor.userId();
            Meteor.call('initUserProfile', id, function (err) {
                if(err){
                    alertError('Error Initiating Your Account', err.message);
                }else{
                    swapElements('.wizard-container', '.final-message');
                    setTimeout(function () {
                        FlowRouter.go('/')
                    }, 3000);
                }
            });
        }else{
            alertError("Oops.", "Please agree to the terms of service.")
        }

    }
});

function swapElements(a,b){
    $(a).fadeOut('fast', function () {
        $(this).replaceWith($(b));
        $(b).fadeIn("slow");
    });
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}