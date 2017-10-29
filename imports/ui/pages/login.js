/**
 * Created by Yonglin Wang on 7/30/2017.
 */
import './login.html'

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
    'submit .login-form': function (evt) {
        evt.preventDefault();
        const email = evt.target.email.value;
        const pass = evt.target.password.value;
        Meteor.loginWithPassword(email,pass,function (err) {
            if(err){
                console.log(err);
            }else {

            }
        });

    },
    'submit .register-form': function (evt) {
        const email = evt.target.registerEmail.value;
        const firstName = evt.target.firstName.value;
        const lastName = evt.target.lastName.value;
        const pass = evt.target.registerPassword.value;
        Accounts.createUser({
            username: firstName+lastName,
            email: email,
            password: pass,
            profile:{
                firstName: firstName,
                lastName: lastName,
                fullName: firstName + " " + lastName,
                homeRoom: 0,
                picture: null
            }
        },function(err){
            if(err){
                alert("error");
                console.log(err)
            }else{
                console.log("Success")
            }
        });
    },
    'click #googleLogin':function () {
        Meteor.loginWithGoogle({
            loginStyle: "redirect",
            requestPermissions: ['profile','email'],
        },(err)=>{
            if(err){
                alertError("Sorry...", err.message);
            }
        });
    },
    'keyup #registerEmail': function (evt) {
        evt.preventDefault();
        let email = evt.target.value;
        if(validateEmail(email)){
            $('.email-warning').hide();
            $('#registerSubmit').prop('disabled',false);
        }else{
            $('.email-warning').show();
            $('#registerSubmit').prop('disabled',true);
        }
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
