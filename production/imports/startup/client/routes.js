/**
 * This file defines all the routing that takes place
 *
 * */

let loggedIn = FlowRouter.group({
    triggersEnter: [
        function () {
            let route;
            if (!(Meteor.loggingIn() || Meteor.userId())){
                route = FlowRouter.current();
                Session.set('redirectAfterLogin', route.path);
                console.log(Session.get('redirectAfterLogin'));
                FlowRouter.go('/login');
            }else{
                Tracker.autorun(function () {
                    let user = Meteor.user();
                    if(user){
                        Session.set('name', user.services.google.name);
                        Session.set('user_img', user.services.google.picture);
                    }
                });
            }
        }
    ]
});

FlowRouter.route('/login',{
    action: function(){
        if(!Meteor.userId()){
            Session.set('redirectAfterLogin', '/');
            BlazeLayout.render('applicationLayout', {main: 'login'});
        }else{
            FlowRouter.go('/');
        }
    },
    name: 'login'
});

loggedIn.route('/blog/:postId',{
    action: function (params) {
        if(params.postId === 'preview'){
            console.log('you are now in preview mode');
            Session.set('post_data', Session.get('preview_json'))
        }
        BlazeLayout.render('applicationLayout',{main: 'details'})
    }
});

loggedIn.route('/dashboard',{
    action: function () {
        BlazeLayout.render('dashboard',{dash: 'dashHome'})
    }
});

loggedIn.route('/course',{
    action: function () {
        BlazeLayout.render('applicationLayout',{main: 'course'})
    }
});

loggedIn.route( '/', {
    action: function() {
        BlazeLayout.render('applicationLayout', {main: 'stream'});
    },
    name: 'root' // Optional route name.
});

loggedIn.route( '/stream', {
    action: function() {
        BlazeLayout.render('applicationLayout', {main: 'stream'});
    },
    name: 'stream' // Optional route name.
});

loggedIn.route('/logout',{
    action: () => {
        Meteor.logout(function() {
            FlowRouter.go('login');
        });
    },
    name: 'logout'
});

loggedIn.route('/first', {
    action: function () {
        BlazeLayout.render('applicationLayout',{main: 'firstTime'});
    },
    name: 'first'
});