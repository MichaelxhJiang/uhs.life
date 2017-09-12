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
        swapElements('#emailIntro', '#confirmIntro');
        swapElements('#subscriptionEmail', '#confirmDetails');
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
        let id = Session.get('id');
        Meteor.call('initUserProfile', id,{
            studentNum: '123456',
            token: 'asdhiouaSasdio231321'
        }, function (err) {
            if(err){
                alert('error');
            }else{
                swapElements('.wizard-container', '.final-message');
                setTimeout(function () {
                    FlowRouter.go('/')
                }, 3000);
            }
        });
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