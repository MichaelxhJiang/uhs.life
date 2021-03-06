import { Meteor } from 'meteor/meteor';
import { Images } from '../../api/images/images.js';
import { Posts } from '../../api/posts/posts.js'
import fs from 'fs';
import Twitter from 'twitter';
import { request } from 'meteor/froatsnook:request';

const T = new Twitter({
    consumer_key:         'cwR4tCHFOTFRIyiLQVacIzns8',
    consumer_secret:      'MP0Pphmcp6HL0FF6WXYhZa2M8b8cTH297MNqRR7M6wwCOBxfwU',
    access_token_key:         '882355763771043840-8uCzofs2q4HHE8m0GS2QZUxqNxzOvEG',
    access_token_secret:  'vpw7YwWu9tic20VI2qDh8W73zJoROenAnDEQoh7PMlM5l'
});

Meteor.methods({
    //setup the twitter api
    'setupTwitterAPI' : function () {
        //Initialize the twitter API
/*        T = new Twitter({
            consumer_key:         'cwR4tCHFOTFRIyiLQVacIzns8',
            consumer_secret:      'MP0Pphmcp6HL0FF6WXYhZa2M8b8cTH297MNqRR7M6wwCOBxfwU',
            access_token:         '882355763771043840-8uCzofs2q4HHE8m0GS2QZUxqNxzOvEG',
            access_token_secret:  'vpw7YwWu9tic20VI2qDh8W73zJoROenAnDEQoh7PMlM5l'
        });*/
        console.log("setting up twitter");

    },
    //post to twitter account
    'postTextAnnouncementTwitter' : function(obj) {
        let headline = obj.headline,
        content = obj.content;
        let status = obj.headline + '\n' + obj.content;
        if (status.length > 140) {
            status = status.substring(0, 137);
            status += "...";
        }

        T.post('statuses/update', { status: status}, function(err, data, response) {
            console.log("Twitter Post Posted", data);
        });
    },
    'postImageAnnouncementTwitter' : function(obj) {
        // post a tweet with media
        let getBase64Data = function(doc, callback) {
            let buffer = new Buffer(0);
            // callback has the form function (err, res) {}
            let readStream = fs.createReadStream(doc.path);
            readStream.on('data', function(chunk) {
                buffer = Buffer.concat([buffer, chunk]);
            });
            readStream.on('error', function(err) {
                callback(err, null);
            });
            readStream.on('end', function() {
                // done
                callback(null, buffer.toString('base64'));
            });
        };
        let getBase64DataSync = Meteor.wrapAsync(getBase64Data);

        let file = Images.findOne({'_id': obj.imgId});
        getBase64DataSync(file, function(err, b64content) {
            // first we must post the media to Twitter
            T.post('media/upload', { media_data: b64content }, function (err, data, response) {

                // now we can reference the media and post a tweet (media will attach to the tweet)
                let mediaIdStr = data.media_id_string;
                let params = { status: obj.headline, media_ids: [mediaIdStr] };

                T.post('statuses/update', params, function (err, data, response) {
                    console.log("Image Text Twitter Post Posted", data);
                });
            });
        });
    },
    'postTextImageAnnouncementTwitter' : function(obj) {
        let getBase64Data = function(doc, callback) {
            let buffer = new Buffer(0);
            // callback has the form function (err, res) {}
            let readStream = fs.createReadStream(doc.path);
            readStream.on('data', function(chunk) {
                buffer = Buffer.concat([buffer, chunk]);
            });
            readStream.on('error', function(err) {
                callback(err, null);
            });
            readStream.on('end', function() {
                // done
                callback(null, buffer.toString('base64'));
            });
        };
        let getBase64DataSync = Meteor.wrapAsync(getBase64Data);

        let status = obj.headline + '\n' + obj.content;
        if (status.length > 140) {
            status = status.substring(0, 137);
            status += "...";
        }

        let file = Images.findOne({'_id': obj.imgId});
        getBase64DataSync(file, function(err, b64content) {
            //console.log(b64content);
            // first we must post the media to Twitter
            T.post('media/upload', { media_data: b64content }, function (err, data, response) {

                // now we can reference the media and post a tweet (media will attach to the tweet)
                let mediaIdStr = data.media_id_string;

                let params = { status: status, media_ids: [mediaIdStr] };

                T.post('statuses/update', params, function (err, data, response) {
                    console.log("Image Text Twitter Post Posted", data);
                });
            });
        });
    },
    'postImageTest' : function(id) {
        /*let PATH = path.join(__dirname, `path/to/video`);

        T.postMediaChunked({ file_path: PATH }, function (err, data, response) {
            const mediaIdStr = data.media_id_string;
            const meta_params = { media_id: mediaIdStr };

            T.post('media/metadata/create', meta_params, function (err, data, response) {
                if (!err) {
                    const params = { status: myTweetObj.content, media_ids: [mediaIdStr] };

                    T.post('statuses/update', params, function (err, tweet, response) {
                        console.log(tweet);
                    });
                }
            });
        });
               // post a tweet with media
        let getBase64Data = function(doc, callback) {
            let buffer = new Buffer(0);
            // callback has the form function (err, res) {}
            let readStream = doc.createReadStream();
            readStream.on('data', function(chunk) {
                buffer = Buffer.concat([buffer, chunk]);
            });
            readStream.on('error', function(err) {
                callback(err, null);
            });
            readStream.on('end', function() {
                // done
                callback(null, buffer.toString('base64'));
            });
        };
        let getBase64DataSync = Meteor.wrapAsync(getBase64Data);
        */


        let obj = Posts.findOne({_id:id});

        let downloadImage = function (imageUrl, callback) {
            //https://atmospherejs.com/froatsnook/request
            console.log("downloading");
            let result = request.getSync(imageUrl, {encoding: null});
            callback(null, new Buffer(result.body).toString('base64'));
        }

        let downloadImageSync = Meteor.wrapAsync(downloadImage);

        //let link = Images.findOne({'_id': obj.imgId}).link();
        let link = "http://www.somebodymarketing.com/wp-content/uploads/2013/05/Stock-Dock-House.jpg"
        console.log('link'+link);

        downloadImageSync(link, function(err, b64content) {
            console.log('download finished');
            // first we must post the media to Twitter
            T.post('media/upload', { media_data: b64content }, function (err, data, response) {

                // now we can reference the media and post a tweet (media will attach to the tweet)
                let mediaIdStr = data.media_id_string;
                let params = { status: obj.headline, media_ids: [mediaIdStr] };

                T.post('statuses/update', params, function (err, data, response) {
                    console.log("Image Text Twitter Post Posted", data);
                });
            });
        });
    },
})
