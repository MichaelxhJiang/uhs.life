/**
 * Created by Yonglin Wang on 7/30/2017.
 */
import './login.html';

Template.login.onRendered(function () {
    //disable register and hid all error prompts when the page initializes
    $('.email-warning').hide();
    $('#registerSubmit').prop('disabled', true);
});

/**
 * This function defines all the events on the login page.*/

Template.login.events({
    //toggle between register and login form
    'click .operation': function () {
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    },
    'click #googleLogin':function () {
        console.log("logging in with google");
        Meteor.loginWithGoogle({
            loginStyle: "redirect",
            requestPermissions: ['profile','email']
        },(err)=>{
            console.log(err);
            if(err){
                alertError("Sorry...", err.message);
            }
        });
    }
});
/**
 * This local method validates the state of a String to see if it is a proper email
 * **/
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

Accounts.onLogin( ()=>{
    const redirect = Session.get('redirectAfterLogin');
    if(redirect){
        if(redirect !== '/login'){
            FlowRouter.go(redirect);
        }
    }else{
        //FlowRouter.go('/');
    }
});
