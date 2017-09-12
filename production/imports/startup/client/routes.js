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
                        Session.set('id', user._id);
                        Session.set('user_img', user.services.google.picture);
                        if(!user.profile.init){
                            Meteor.call('accounts.initRoles');
                            FlowRouter.go('/first')
                        }
                    }
                });
            }
        }
    ]
});

let admin = FlowRouter.group({
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
                        Session.set('id', user._id);
                        Session.set('user_img', user.services.google.picture);
                        if(!user.profile.init){
                            FlowRouter.go('/first')
                        }/*else if(!Roles.userIsInRole(user._id, 'admin')){
                            alertError('Sorry', "You do not have access to this area.");
                            FlowRouter.go('/')
                        }*/
                    }
                });
            }
            console.log('welcome to admin');
        }
    ]
});

admin.route('/dashboard/users', {
    action: function () {
        BlazeLayout.render('dashboard',{dash: 'dashUsers'})
    }
});

admin.route('/dashboard/announcements', {
    action: function () {
        BlazeLayout.render('dashboard',{dash: 'dashAnnouncements'})
    }
});

admin.route('/dashboard/categories', {
    action: function () {
        BlazeLayout.render('dashboard',{dash: 'dashCategories'})
    }
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
            Session.setPersistent('post_data', Session.get('preview_json'))
        }else{
            console.log(params.postId);
            Tracker.autorun(function () {
               let post = Posts.findOne({_id: params.postId});
               if(post){
                   Session.setPersistent('post_data', post);
               }
            });
        }
        window.scrollTo(0, 0);
        BlazeLayout.render('applicationLayout',{main: 'details'})
    }
});

admin.route('/dashboard',{
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
        /*Tracker.autorun(function () {
            let user = Meteor.user();
            if(user){
                if(user.profile.init){
                    FlowRouter.go('/')
                }else{
                    BlazeLayout.render('applicationLayout',{main: 'firstTime'});
                }
            }
        });*/
    },
    name: 'first'
});