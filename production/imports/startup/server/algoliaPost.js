//Server side method to be called from client to post announcement

// api key that connects the client side to Algolia's server
var client = AlgoliaSearch("GJDCY9DKEW", "31f60dc3cc7926270934909c81f867ee");

// select indice (collection) of data to be accesed. In this case it would be the announcements
var index = client.initIndex('announcement');

Meteor.methods({
   /**
   @params title : string; text: string; fileType: string; textFirst: boolean
   **/
   'postTextImageAlgolia' : function(title, text, imgId, fileType, textFirst, inJson) {

      //define object being posted with layout
      var objects = [{
         class: "announcement",
         type: "text_media",
         title: title,
         text: text,
         imgId: imgId,
         fileType: fileType,
         textFirst: textFirst
      }];

      //adds object to the indice announcement
      index.addObjects(objects, function(err, content) {

         //error catch for algolia issues
         if(err) {
            console.error('Algolia returned an error', err);
         } else {
            //prints the announcement posted
            console.log(content);
         }
      });
   },
   'postTextAlgolia' : function(title, text) {

      //define object being posted with layout
      var objects = [{
         class: "announcement",
         type: "text",
         title: title,
         text: text
      }];

      //adds object to the indice announcement
      index.addObjects(objects, function(err, content) {

         //error catch for algolia issues
         if(err) {
            console.error('Algolia returned an error', err);
         } else {
            //prints the announcement posted
            console.log(content);
         }
      });
   },
   'postImageAlgolia' : function(title, imgId, fileType) {

      //define object being posted with layout
      var objects = [{
         class: "announcement",
         type: "media",
         title: title,
         imgId: imgId,
         fileType: fileType
      }];

      //adds object to the indice announcement
      index.addObjects(objects, function(err, content) {

         //error catch for algolia issues
         if(err) {
            console.error('Algolia returned an error', err);
         } else {
            //prints the announcement posted
            console.log(content);
         }
      });
   },
   'postBlogAlgolia' : function(title, description, imgId, fileType, content) {
      //define object being posted with layout
      var objects = [{
         class: "blog",
         title: title,
         description: description,
         imgId: imgId,
         fileType: fileType,
         content: content
      }];

      //adds object to the indice announcement
      index.addObjects(objects, function(err, content) {

         //error catch for algolia issues
         if(err) {
            console.error('Algolia returned an error', err);
         } else {
            //prints the announcement posted
            console.log(content);
         }
      });
   },
});
