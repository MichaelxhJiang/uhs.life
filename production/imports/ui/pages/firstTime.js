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
    'submit #finalForm': function (evt,template) {
        evt.preventDefault();
        let id = Session.get('id');
        Meteor.call('initUserProfile', id,{
            studentNum: '123456',
            token: 'asdhiouaSasdio231321'
        }, function (err) {
            if(err){
                alert('error');
            }
        });
        swapElements('.wizard-container', '.final-message');
    }
});

function swapElements(a,b){
    $(a).fadeOut('fast', function () {
        $(this).replaceWith($(b));
        $(b).fadeIn("slow");
    });
}