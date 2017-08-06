import { Meteor } from 'meteor/meteor';
import Unsplash, { toJson } from 'unsplash-js';
import es6Promise from 'es6-promise';
import isomorphicFetch from 'isomorphic-fetch';

es6Promise = require('es6-promise').polyfill();
isomorphicFetch = require('isomorphic-fetch');

Meteor.methods({
   'setupUnsplash' : function() {
      unsplash = new Unsplash ({
         applicationId: "bb5b9c84132fd7a81bb83c76f31682d365611a88e4c4787c15c10e6f5c0dda1e",
         secret: "449740b9a733347f3476d7c87aff43054cb36c78b40ef88d8593605926d7ddb5",
         callbackUrl: "localhost:3000"
      });
   },
   'searchKeyword' : function(key) {
      const result = unsplash.search.photos("dogs", 1, 1)
     .then(toJson)
     .then(json => {
       return json;
     });
     return result;
   }
});
