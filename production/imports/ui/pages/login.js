/**
 * Created by Yonglin Wang on 7/30/2017.
 */
import './login.html'

Template.login.events({
    'click .operation': function (evt, template) {
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    },
    'submit form': function (evt, template) {
        FlowRouter.go('stream');
    }
})