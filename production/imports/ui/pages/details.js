import './details.html';

Template.details.onRendered(function () {
    let data = Session.get('post_data');
    setTitle(data.title)
});

Template.details.helpers({
    'name': function () {
      return Session.get('name');
    },
   'picture': function () {
       return Session.get('user_img');
   },
    'postTitle': function () {

    },
    'postSubtitle': function () {
        let data = Session.get('post_data');
        return data.subtitle;
    },
    'postBody': function () {
        let data = Session.get('post_data');
        return data.content;
    },
    'postTags': function () {
        let data = Session.get('post_data');
        return data.tags;
    },
    'postSplash': function () {
        let data = Session.get('post_data');
        if(data.hasUnsplash){
            Meteor.call('setupUnsplash', function (err) {
                if(err){
                    console.log(err);
                }else{
                    Meteor.call('getPhoto', data.featured,function (err,data) {
                        if(err){
                            console.log(err);
                        }else{
                            console.log(data.urls.full);
                            $('.post-header').css('background-image',"url("+data.urls.full+")");
                            return data.urls.full;
                        }
                    })
                }
            });
        }
    }
});