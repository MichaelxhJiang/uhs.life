//function to setup the facebook API
setupFacebook = function() {
  Meteor.call('getFBAppId', function(err, result) { //get the app id from server
    if (err) {
      console.log("error retreiving FB App ID");
    } else {
      //Initialize the facebook SDK
      FB.init({
        appId      : result,
        status     : true,
        xfbml      : true,
        version    : 'v2.9'
      });
    }
  });
}

//function to post a message to facebook
postFacebook = function(msg) {
  FB.login(function(response){
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
      FB.api('/' + pageId + '/feed', 'post', {access_token: pageToken, message: msg}, function(response) {
        console.log(response);
      });
    });
  }, {scope: 'publish_actions,manage_pages,publish_pages'});  //permissions listed here
}

//test function to post with an image
postImgFacebook = function (msg) {
  FB.login(function(response){
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
        message: msg,
        //picture: 'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg',
        //link: 'http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg'
        url: 'https://ak.picdn.net/assets/cms/97e1dd3f8a3ecb81356fe754a1a113f31b6dbfd4-stock-photo-photo-of-a-common-kingfisher-alcedo-atthis-adult-male-perched-on-a-lichen-covered-branch-107647640.jpg'
      }, function(response) {
        console.log(response);
      });
    });
  }, {scope: 'publish_actions,manage_pages,publish_pages'});  //permissions listed here
}
