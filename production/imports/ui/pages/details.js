import { Images } from '../../api/images/images.js';
import './details.html';

Template.details.onCreated(function () {
    let data = Session.get('post_data');
    Session.set('navTitle', data.title);
});

Template.details.onRendered(function () {
});

Template.details.helpers({
    'name': function () {
      return Session.get('name');
    },
   'picture': function () {
       return Session.get('user_img');
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
        if(data.meta.hasUnsplash){
            Meteor.call('setupUnsplash', function (err) {
                if(err){
                    console.log(err);
                }else{
                    Meteor.call('getPhoto', data.imgId,function (err,data) {
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
        }else{
            Tracker.autorun(function () {
                let image = Images.findOne({_id: data.imgId});
                if(image){
                    let url = image.url();
                    $('.post-header').css('background-image',"url("+url+")");
                    return true;
                }
            });
        }
    }
});
