import { Images } from './images.js';

if (Meteor.isServer) {
   Meteor.publish('images', function imagesPublication() {
    return Images.find();  //TODO only show drafts of current user
  });
}

Meteor.methods({
   'images.insert' : function(image, callback) {
      console.log(image);
      Images.insert(image, function(err, fileObj) {
         if (err) {
            callback(err, null);
         } else {
            console.log('upload success');
            callback(null, fileObj);
         }
      })
   }
})
