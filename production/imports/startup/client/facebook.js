import {Images} from '../../api/images/images.js';

//function to setup the facebook API
setupFacebook = function (callback) {
    Meteor.call('getFBAppId', function (err, result) { //get the app id from server
        if (err) {
            console.log("error retreiving FB App ID");
            callback(err, null);
        } else {
            //Initialize the facebook SDK

            FB.init({
                appId: result,
                status: true,
                xfbml: true,
                version: 'v2.9'
            }, function(err, response) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(response);
                }
            });
            callback(null,1);
        }
    });
}

//function to post a message to facebook
postTextFacebook = function (obj) {
    console.log("attempting to log in");
    FB.login(function (response) {
        //use this to get access token for user
        //var token = response.authResponse.accessToken;
        var pageToken, pageId;

        //make the API call to access pages
        FB.api('/me/accounts', function (response) {
            console.log(response);

            //store the pageToken and pageId for the first entry.
            //This account is intended to only have one page as admin
            pageToken = response.data[0].access_token;
            pageId = response.data[0].id;

            //make the API call to post as page
            FB.api('/' + pageId + '/feed', 'post', {access_token: pageToken, message: obj.headline + '\n' + obj.content}, function (response) {
                console.log(response);
            });
        });
    }, {scope: 'publish_actions,manage_pages,publish_pages'});  //permissions listed here
}

//test function to post with an image
postImageFacebook = function (obj) {
    FB.login(function (response) {
        //use this to get access token for user
        //var token = response.authResponse.accessToken;
        var pageToken, pageId;

        //make the API call to access pages
        FB.api('/me/accounts', function (response) {
            console.log(response);

            //store the pageToken and pageId for the first entry.
            //This account is intended to only have one page as admin
            pageToken = response.data[0].access_token;
            pageId = response.data[0].id;

            //make the API call to post as page
            FB.api('/' + pageId + '/photos', 'post', {
                access_token: pageToken,
                message: obj.headline,
                picture: Images.findOne({'_id':obj.imgId}).url(),  //'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg'
                //link: 'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg'
                //url: 'https://ak.picdn.net/assets/cms/97e1dd3f8a3ecb81356fe754a1a113f31b6dbfd4-stock-photo-photo-of-a-common-kingfisher-alcedo-atthis-adult-male-perched-on-a-lichen-covered-branch-107647640.jpg'
            }, function (response) {
                console.log(response);
            });
        });
    }, {scope: 'publish_actions,manage_pages,publish_pages'});  //permissions listed here
}

//test function to post with an image
postTextImageFacebook = function (obj) {
    FB.login(function (response) {
        //use this to get access token for user
        //var token = response.authResponse.accessToken;
        var pageToken, pageId;

        //make the API call to access pages
        FB.api('/me/accounts', function (response) {
            console.log(response);

            //store the pageToken and pageId for the first entry.
            //This account is intended to only have one page as admin
            pageToken = response.data[0].access_token;
            pageId = response.data[0].id;

            //make the API call to post as page
            FB.api('/' + pageId + '/photos', 'post', {
                access_token: pageToken,
                message: obj.headline + '\n' + obj.content,
                picture: Images.findOne({'_id':obj.imgId}).url(),
                //link: 'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg'
               // url: 'https://ak.picdn.net/assets/cms/97e1dd3f8a3ecb81356fe754a1a113f31b6dbfd4-stock-photo-photo-of-a-common-kingfisher-alcedo-atthis-adult-male-perched-on-a-lichen-covered-branch-107647640.jpg'
            }, function (response) {
                console.log(response);
            });
        });
    }, {scope: 'publish_actions,manage_pages,publish_pages'});  //permissions listed here
}
