/**
 * This file defines all the routing that takes place
 *
 * */

let loggedIn = FlowRouter.group({
    triggersEnter: [
        function () {
            let route;
            Session.set("DocumentTitle","UHS Life - Crafted By Students, For Everyone");
            if (!(Meteor.loggingIn() || Meteor.userId())){
                route = FlowRouter.current();
                Session.set('redirectAfterLogin', route.path);
                console.log(Session.get('redirectAfterLogin'));
                FlowRouter.go('/login');
            }else{
                Tracker.autorun(function () {
                    let userSub = Meteor.subscribe('allUsers');
                    let user = Meteor.user();
                    if(userSub.ready()){
                        if(!user.profile.init){
                            Meteor.call('accounts.initRoles');
                            FlowRouter.go('/first')
                        }else{
                            Session.setPersistent('name', user.services.google.name);
                            Session.set('courses',user.profile.private.courses);
                            Session.setPersistent('token',user.profile.private.token);
                            Session.set('tokenExpiry',user.profile.private.tokenDate);
                            Session.set('user_img', user.services.google.picture);
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
                    let userSub = Meteor.subscribe('allUsers');
                    let user = Meteor.user();
                    if(userSub.ready()){
                        if(!user.profile.init){
                            FlowRouter.go('/first')
                        }else{
                            Session.set('name', user.services.google.name);
                            Session.set('id', user.profile.id);
                            Session.set('courses',user.profile.private.courses);
                            Session.set('tokenExpiry',user.profile.private.tokenDate);
                            Session.set('token',user.profile.private.token);
                            Session.set('user_img', user.services.google.picture);
                        }
                        /*else if(!Roles.userIsInRole(user._id, 'admin')){
                         alertError('Sorry', "You do not have access to this area.");
                         FlowRouter.go('/')
                         }*/
                    }
                });
            }
        }
    ]
});

admin.route('/dashboard/users', {
    action: function () {
        Session.set("DocumentTitle","Users - Administrative Dashboard | uhs.life");
        BlazeLayout.render('dashboard',{dash: 'dashUsers'})
    }
});

admin.route('/dashboard/announcements', {
    action: function () {
        Session.set("DocumentTitle","All Announcements - Administrative Dashboard | uhs.life");
        BlazeLayout.render('dashboard',{dash: 'dashAnnouncements'})
    }
});

admin.route('/dashboard/categories', {
    action: function () {
        Session.set("DocumentTitle","Categories - Administrative Dashboard | uhs.life");
        BlazeLayout.render('dashboard',{dash: 'dashCategories'})
    }
});

admin.route('/dashboard/organizations', {
    action: function () {
        Session.set("DocumentTitle","Organizations - Administrative Dashboard | uhs.life");
        BlazeLayout.render('dashboard',{dash: 'dashOrganizations'})
    }
});

admin.route('/dashboard/suggestions', {
    action: function () {
        Session.set("DocumentTitle","Suggestions - Administrative Dashboard | uhs.life");
        BlazeLayout.render('dashboard',{dash: 'dashSuggestions'})
    }
});

FlowRouter.route('/login',{
    action: function(){
        if(!Meteor.userId()){
            Session.set('redirectAfterLogin', '/');
            Session.set("DocumentTitle","Please Login | uhs.life");
            BlazeLayout.render('applicationLayout', {main: 'login'});
        }else{
            FlowRouter.go('/');
        }
    },
    name: 'login'
});

loggedIn.route('/stories',{
    action: function () {
        BlazeLayout.render('applicationLayout',{main: 'blogs'})
    }
});

loggedIn.route('/blog/:postId',{
    action: function (params) {
        if(params.postId === 'preview'){
            Session.setPersistent('post_data', Session.get('preview_json'))
        }else{
            Tracker.autorun(function () {
               let post = Posts.findOne({_id: params.postId});
               if(post){
                   Session.set("DocumentTitle", post.title + " | uhs.life");
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
        Session.set("DocumentTitle","Administrative Dashboard | uhs.life");
        BlazeLayout.render('dashboard',{dash: 'dashHome'})
    }
});

loggedIn.route('/course/:courseId',{
    action: function (params) {
        let tokenJson = Session.get('token');
        tokenJson.subject_id = params.courseId;
        Meteor.call('getTeachAssistCourseDetails', tokenJson, function (err, data) {
            if(err || data.ERROR){
                if(err.error === 400){
                    Modal.show('teachAssistPass');
                }else{
                    alertError('Something went wrong', 'We are having problems talking to teach assist. You can visit ta.yrdsb.ca for more details on your mark.')
                }
            }else{
                console.log(data);
                let a = Meteor.user().profile.private.courses;
                let found;
                let entry;
                for (let index = 0; index < a.length; ++index) {
                    entry = a[index];
                    if (entry.subject_id === params.courseId) {
                        found = entry;
                        break;
                    }
                }
                Session.setPersistent('displayMark', found.mark);
                Session.setPersistent('courseData', data);
                window.scrollTo(0, 0);
                BlazeLayout.render('applicationLayout',{main: 'course'});
                if(FlowRouter.current().route.name === 'course'){
                    let marks = Session.get('courseData').categoryMarks;
                    setProgressBar(Session.get('displayMark').substring(1));
                    drawChart('knowledgeChart', marks[0]);
                    drawChart('thinkingChart', marks[1]);
                    drawChart('communicationChart', marks[2]);
                    drawChart('applicationChart', marks[3]);
                }
            }
        });
    },
    name: 'course'
});

loggedIn.route( '/big-picture', {
    action: function() {
        BlazeLayout.render('applicationLayout', {main: 'bigPicture'});
    },
    name: 'bigPicture' // Optional route name.
});

loggedIn.route( '/', {
    action: function() {
        Session.set("DocumentTitle", "Stream | uhs.life");
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
        Session.set("DocumentTitle","Logging out...");
        Meteor.logout(function() {
            FlowRouter.go('/');
        });
    },
    name: 'logout'
});

loggedIn.route('/first', {
    action: function () {
        Session.set("DocumentTitle","Welcome to uhs.life!");
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

checkTokenExpiry = function () {
    const now = new Date();
    let diff = Math.abs(now - Session.get('tokenExpiry'));
    let minutes = Math.floor((diff/1000)/60);
    return minutes < 15;
}