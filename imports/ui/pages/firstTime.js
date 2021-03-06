/**
 * Created by Yonglin Wang on 8/3/2017.
 */
import './firstTime.html';

Meteor.users.allow({
    update(userId, doc) { return (doc && doc.userId === userId); }
});

Template.firstTime.onRendered(function () {
    Tracker.autorun(function () {
        let courseSub = Meteor.subscribe('allCourses',1000);
        let clubSub = Meteor.subscribe('allClubs',1000);
        let categorySub = Meteor.subscribe('categories');
        if(courseSub.ready() && clubSub.ready() && categorySub.ready()){
            let courses = Courses.find({});
            courses.observeChanges({
                added: function (id, fields) {
                    let newCat = new Option(fields.name + " - " + fields.code, fields.code);
                    $('#firstCourseSelect').append(newCat);
                }
            });
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
    $('#categoryInterest').select2({
        placeholder: "Click to select the clubs you want to receive notifications about",
        allowClear: true
    });
    $('#clubInterest').select2({
        placeholder: "Click to select the clubs you want to receive notifications about",
        allowClear: true
    });
});

Template.firstTime.events({
    'click #startFirst': function (evt,template) {
        evt.preventDefault();
        swapElements('#firstIntro','#interestIntro');
        swapElements('#beginIntro','#interestFormIntro');
        /*swapElements('#firstIntro','#teachIntro');
        swapElements('#beginIntro','#teachAssistInfo');*/
        let categories = Categories.find({});
        categories.observeChanges({
            added: function (id, fields) {
                let newCat = new Option(fields.name, fields.name);
                $('#categoryInterest').append(newCat);
            }
        });
        let clubs = Clubs.find({});
        clubs.forEach(function (i) {
            let newCat = new Option(i.name, i.name);
            $('#firstClubSelect').append(newCat);
            $('#clubInterest').append(newCat);
        });
        $('#categoryInterest').select2({
            placeholder: "Click to select",
            allowClear: true
        });
        $('#clubInterest').select2({
            placeholder: "Click to select",
            allowClear: true
        });
    },
    'click #startFirstTeach': function (evt,template) {
        evt.preventDefault();
/*        swapElements('#firstIntro','#interestIntro');
        swapElements('#beginIntro','#interestFormIntro');*/
        swapElements('#firstIntro','#teachIntro');
        swapElements('#beginIntro','#teachAssistInfo');
        let clubs = Clubs.find({});
        clubs.forEach(function (i) {
            let newCat = new Option(i.name, i.name);
            $('#firstClubSelect').append(newCat);
            $('#clubInterest').append(newCat);
        });
        $('#clubInterest').select2({
            placeholder: "Click to select",
            allowClear: true
        });
    },
    'click #skipNext': function (evt,template) {
        evt.preventDefault();
        swapElements('#teachIntro', '#interestIntro');
        swapElements('#teachAssistInfo', '#interestFormIntro');
        $('#categoryInterest').select2({
            placeholder: "Click to select the clubs you want to receive notifications about",
            allowClear: true
        });
        $('#clubInterest').select2({
            placeholder: "Click to select the clubs you want to receive notifications about",
            allowClear: true
        });
    },
    'click #skipNextTeach': function (evt,template) {
        evt.preventDefault();
        swapElements('#teachIntro', '#emailIntro');
        swapElements('#teachAssistInfo', '#subscriptionEmail');
    },
    'click #skipInterest': function (evt) {
        evt.preventDefault();
        swapElements('#interestIntro', '#emailIntro');
        swapElements('#interestFormIntro', '#subscriptionEmail');
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
           $('.teachLoader').fadeIn('slow');
        });
        Meteor.call('getTeachAssistTokens', {student_number: user, password: pass}, function (err, data) {
            if(err){
                alertError("Failed to connect with teach assist", err.message);
                $('.teachLoader').fadeOut('fast', function () {
                    $('.teach-assist-login').fadeIn('slow');
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
                        });
                    }
                });
            }
        });
    },
    'submit #interestForm': function (evt) {
        evt.preventDefault();
        const categories = $('#categoryInterest').val();
        const clubs = $('#clubInterest').val();
        Meteor.call('accounts.updateSubscriptionClubs', clubs, function (err) {
            if(err){
                alertError("Error Occurred when updating your profile", err.message);
            }else {
                Meteor.call('accounts.updateSubscriptionCategories', categories, function(err) {
                    if (err) {
                        alertError("Error Occurred when updating your profile", err.message);
                    } else {
                        alertSuccess("Thank you!", "We have recorded the information you provided");
                        swapElements('#interestIntro', '#emailIntro');
                        swapElements('#interestFormIntro', '#subscriptionEmail');
                    }
                });
            }
        });
    },
    'submit #organizationsForm': function (evt) {
        evt.preventDefault();
        const courses = $('#firstCourseSelect').val();
        const clubs = $('#firstClubSelect').val();
        Meteor.call('accounts.updateSubscriptionClubs', clubs, function (err) {
            if(err){
                alertError("Error Occurred when updating your profile", err.message);
            }else {
                Meteor.call('accounts.updateSubscriptionCourses', courses, function(err) {
                    if (err) {
                        alertError("Error Occurred when updating your profile", err.message);
                    } else {
                        alertSuccess("Thank you!", "We have recorded the information you provided");
                        swapElements('#teachIntro', '#emailIntro');
                        swapElements('#teachAssistInfo', '#subscriptionEmail');
                    }
                });
            }
        });
    },
    'submit #newsletterEmailForm': function (evt) {
        evt.preventDefault();
        let email = $('#personalEmail').val();
        const userInfo = Meteor.user().services.google;
        if(email.length === 0){
            email = userInfo.email;
        }
        if(!validateEmail(email)){
            alertError("Sorry...", "The email you entered is incorrect.");
        }else{
            Meteor.call('news.addSubscriber', email, userInfo.given_name, userInfo.family_name, function (err) {
                if(err){
                    alertError("Something went wrong", err.message + "\nYou can subscribe to the newsletter anytime later.");
                }else{
                    Meteor.call('accounts.setPersonalEmail', email, function (err) {
                        if(err){
                            alertError("Error Occurred when updating your profile", err.message);
                        }
                    });
                    Session.set('personalEmail', email);
                    alertSuccess("Great!", "We have signed you up for newsletters!");
                    swapElements('#emailIntro', '#confirmIntro');
                    swapElements('#subscriptionEmail', '#confirmDetails');
                }
            });
        }
    },
    'submit #finalForm': function (evt,template) {
        evt.preventDefault();
        if(document.getElementById('checkboxTerms').checked){
            const id = Meteor.userId();
            const tag = $('#introTagLine').val();
            Meteor.call('initUserProfile', id, "Member of UHS", function (err) {
                if(err){
                    alertError('Error Initiating Your Account', err.message);
                }else{
                    swapElements('.wizard-container', '.final-message');
                    setTimeout(function () {
                        FlowRouter.go('/');
                    }, 3000);
                }
            });
        }else{
            alertError("Oops.", "Please agree to the terms of service.");
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
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
