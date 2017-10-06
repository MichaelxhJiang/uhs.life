//Server side method to be called from client to post announcement

// api key that connects the client side to Algolia's server
var client = AlgoliaSearch("GJDCY9DKEW", "31f60dc3cc7926270934909c81f867ee");

// select indice (collection) of data to be accesed. In this case it would be the announcements
var index = client.initIndex('announcement');

index.setSettings({
    searchableAttributes: [
        'headline',
        'content',
        'type',
        'tags',
        'categories',
        'subType'
    ]
});

import {Posts} from '../../api/posts/posts.js';

Meteor.methods({
    /**
    @params title : string; text: string; fileType: string; textFirst: boolean
    **/
    'postTextImageAlgolia' : function(postId) {
        let json = Posts.findOne({'_id':postId});

        let newJson = {
            type: json.type,
            subType: json.subType,
            headline: json.headline,
            content: json.content,
            tags: json.tags,
            categories: json.categories,
            imgId: json.imgId
        }
        //adds object to the indice announcement
        index.addObject(newJson, Meteor.bindEnvironment(function(err, content) {

            //error catch for algolia issues
            if(err) {
                console.error('Algolia returned an error', err);
            } else {
                //prints the announcement posted
                console.log(content);
                Posts.update({'_id': postId}, { $set: {'meta.algoliaId':content.objectID}}, function(err, response) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(response);
                    }
                });
            }
        }));
    },
    'postTextAlgolia' : function(postId) {
        let json = Posts.findOne({'_id':postId});

        let newJson = {
            type: json.type,
            subType: json.subType,
            headline: json.headline,
            content: json.content,
            tags: json.tags,
            categories: json.categories,
        }

        //adds object to the indice announcement
        index.addObject(newJson, Meteor.bindEnvironment(function(err, content) {

            //error catch for algolia issues
            if(err) {
                console.error('Algolia returned an error', err);
            } else {
                //prints the announcement posted
                console.log(content);
                Posts.update({'_id':postId}, { $set: {'meta.algoliaId':content.objectID}}, function(err, response) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(response);
                    }
                });
            }
        }));
    },
    'postImageAlgolia' : function(postId) {
        let json = Posts.findOne({'_id':postId});

        let newJson = {
            type: json.type,
            subType: json.subType,
            headline: json.headline,
            tags: json.tags,
            categories: json.categories,
            imgId: json.imgId
        }

        //adds object to the indice announcement
        index.addObject(newJson, Meteor.bindEnvironment(function(err, content) {

            //error catch for algolia issues
            if(err) {
                console.error('Algolia returned an error', err);
            } else {
                //prints the announcement posted
                console.log(content);
                Posts.update({'_id':postId}, { $set: {'meta.algoliaId':content.objectID}}, function(err, response) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(response);
                    }
                });
            }
        }));
    },
    'postBlogAlgolia' : function(postId) {
        let json = Posts.findOne({'_id':postId});
        let newJson = {
            type: json.type,
            headline: json.title,
            subType: json.subtitle,
            content: json.content,
            tags: json.tags,
            categories: json.categories,
            imgId: json.imgId
        }
        //adds object to the indice announcement
        index.addObjects(newJson, Meteor.bindEnvironment(function(err, content) {

            //error catch for algolia issues
            if(err) {
                console.error('Algolia returned an error', err);
            } else {
                //prints the announcement posted
                Posts.update({'_id':postId}, { $set: {'meta.algoliaId':content.objectID}}, function(err, response) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(response);
                    }
                });
                console.log(content);

            }
        }));
    },
});
