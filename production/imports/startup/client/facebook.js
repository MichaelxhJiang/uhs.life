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

extendToken = function(accessToken) {
    let appId, appSec;
    Meteor.call('getFBAppId', function(err, response) {
        appId = response;
        Meteor.call('getFBSecret', function(err, response2) {
            appSec = response2;
            console.log(appId);
            console.log(appSec);
            console.log(accessToken);
            $.get("https://graph.facebook.com/oauth/access_token", {
                grant_type:'fb_exchange_token',
                client_id:appId,
                client_secret:appSec,
                fb_exchange_token:accessToken },
                function (data) {
                    console.log(data);
            })
        })
    });

}

//function to post a message to facebook
postTextFacebook = function (obj) {
    //console.log("attempting to log in");
    FB.api('/1152573311514394/feed', 'post', {access_token: 'EAAGTzYuTCloBAFMDsZBc4ZB8Vle8L7Scrm07kYvDRc0SvaOYLwbOCQBtinhUQ4OSlRQOdNY7qgIGBDrVK60ckPdcNHZC6mZC8rANyjZCtH4XcE5qexIZCSHFDniuMyGBAcm3eZCpRDmhZA3NrNUyKa63ymrX7kQ4UKA4ThYD7CJffivm32CPIJ7i5sPcQ9X7KTGk5PgGXXpwiQZDZD',
         message: obj.headline + '\n' + obj.content},
         function (response) {
             console.log(response);
    });
    /*FB.login(function (response) {
        //use this to get access token for user
        //var token = response.authResponse.accessToken;
        var pageToken, pageId;
        console.log(response)
        //make the API call to access pages
        FB.api('/me/accounts', function (response) {
            //console.log(response);

            //store the pageToken and pageId for the first entry.
            //This account is intended to only have one page as admin
            pageToken = response.data[0].access_token;
            pageId = response.data[0].id;
            //extendToken(pageToken);

            //make the API call to post as page
            FB.api('/' + pageId + '/feed', 'post', {access_token: pageToken, message: obj.headline + '\n' + obj.content}, function (response) {
                console.log(response);
            });

        });
    }, {scope: 'publish_actions,manage_pages,publish_pages'});  //permissions listed here*/
}

//test function to post with an image
postImageFacebook = function (obj) {
    console.log("posting to facebook");
    FB.api('/1152573311514394/feed', 'post', {access_token: 'EAAGTzYuTCloBAFMDsZBc4ZB8Vle8L7Scrm07kYvDRc0SvaOYLwbOCQBtinhUQ4OSlRQOdNY7qgIGBDrVK60ckPdcNHZC6mZC8rANyjZCtH4XcE5qexIZCSHFDniuMyGBAcm3eZCpRDmhZA3NrNUyKa63ymrX7kQ4UKA4ThYD7CJffivm32CPIJ7i5sPcQ9X7KTGk5PgGXXpwiQZDZD',
        message: obj.headline,
        picture: 'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg',
        link: 'https://www.nytimes.com/2017/09/08/us/hurricane-irma-miami-florida.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news'},  //'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg'Images.findOne({'_id':obj.imgId}).url()
        function (response) {
            console.log(response);

    });
    /*FB.login(function (response) {
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
    }, {scope: 'publish_actions,manage_pages,publish_pages'});  //permissions listed here*/
}

//test function to post with an image
postTextImageFacebook = function (obj) {
    FB.api('/1152573311514394/feed', 'post', {access_token: 'EAAGTzYuTCloBAFMDsZBc4ZB8Vle8L7Scrm07kYvDRc0SvaOYLwbOCQBtinhUQ4OSlRQOdNY7qgIGBDrVK60ckPdcNHZC6mZC8rANyjZCtH4XcE5qexIZCSHFDniuMyGBAcm3eZCpRDmhZA3NrNUyKa63ymrX7kQ4UKA4ThYD7CJffivm32CPIJ7i5sPcQ9X7KTGk5PgGXXpwiQZDZD',
        message: obj.headline + '\n' + obj.content,
        picture: 'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg'},  //'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg'Images.findOne({'_id':obj.imgId}).url()
        function (response) {
            console.log(response);
    });
    /*FB.login(function (response) {
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
    }, {scope: 'publish_actions,manage_pages,publish_pages'});  //permissions listed here*/
}
