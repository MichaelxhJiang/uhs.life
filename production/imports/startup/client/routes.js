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
                if(route.route.name !== 'login'){
                    Session.set('redirectAfterLogin', route.path);
                    console.log(Session.get('redirectAfterLogin'));
                }else{
                    Session.set('redirectAfterLogin', "/");
                }
                FlowRouter.go('/login');
            }
        }
    ]
});

FlowRouter.route('/login',{
    action: function(){
        if(!Meteor.userId()){
            BlazeLayout.render('applicationLayout', {main: 'login'});
        }else{
            FlowRouter.go('/');
        }
    },
    name: 'login'
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