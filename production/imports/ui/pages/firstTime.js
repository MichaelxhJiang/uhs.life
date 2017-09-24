/**
 * Created by Yonglin Wang on 8/3/2017.
 */
import './firstTime.html'

Template.firstTime.onRendered(function () {

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
        Meteor.call('getTeachAssistTokens', {student_number: user, password: pass}, function (err, data) {
            if(err){
                alertError("Failed to connect with teach assist", err.message)
            }else{
                Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.private.token": data, "profile.private.tokenDate": new Date()}}, function (err) {
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
                                Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.private.courses": data}});
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
    'submit #newsletterEmailForm': function (evt) {
        evt.preventDefault();
        let email = $('#personalEmail').val();
        if(!validateEmail(email)){
            alertError("Sorry...", "The email you entered is unacceptable.")
        }else{
            Meteor.call('accounts.setPersonalEmail', email, function (err) {
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