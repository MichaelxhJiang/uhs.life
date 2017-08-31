import { Meteor } from 'meteor/meteor';

Meteor.methods({
  //return the twitter api key
  'getTwitterAPIKey' : function() {
    return 'cwR4tCHFOTFRIyiLQVacIzns8';
  },
  //return the twitter api secret
  'getTwitterAPISecret' : function() {
    return 'MP0Pphmcp6HL0FF6WXYhZa2M8b8cTH297MNqRR7M6wwCOBxfwU';
  },
  //return the twitter access token
  'getTwitterAccessToken' : function() {
    return '882355763771043840-8uCzofs2q4HHE8m0GS2QZUxqNxzOvEG';
  },
  //return the twitter access token secret
  'getTwitterAccessTokenSecret' : function() {
    return 'vpw7YwWu9tic20VI2qDh8W73zJoROenAnDEQoh7PMlM5l';
  },
  //setup the twitter api
  'setupTwitterAPI' : function () {
    Meteor.call('getTwitterAccessToken', function(err, accessToken) {
      Meteor.call('getTwitterAccessTokenSecret', function(err, accessTokenSecret) {
        Meteor.call('getTwitterAPISecret', function(err, apiSecret) {
          Meteor.call('getTwitterAPIKey', function(err, apiKey) {
            //Initialize the twitter API
            T = new Twit({
                consumer_key:         apiKey,
                consumer_secret:      apiSecret,
                access_token:         accessToken,
                access_token_secret:  accessTokenSecret
            });
          });
        });
      });
    });
  },
  //post to twitter account
  'postTextAnnouncementTwitter' : function(obj) {
    let headline = obj.headline,
      content = obj.content;

    T.post('statuses/update', { status: headline + '\n' + content}, function(err, data, response) {
      console.log(data)
    });
  },
  //test function to post with an image DO NOT USE
  'postImgTwitter' : function(msg) {
    var fs = require('fs');
    // post a tweet with media
    var b64content = fs.readFileSync('/Documents/TestFacebookAPI/facebookapi/public/images/stock1.jpg', { encoding: 'base64' });

    // first we must post the media to Twitter
    T.post('media/upload', { media_data: b64content }, function (err, data, response) {

      // now we can reference the media and post a tweet (media will attach to the tweet)
      var mediaIdStr = data.media_id_string
      var params = { status: msg, media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log(data)
      });
    });
  },
})
