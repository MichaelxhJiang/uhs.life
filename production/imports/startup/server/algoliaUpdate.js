//Server side method to be called from client to update an existing announcement

// api key that connects the client side to Algolia's server
var client = AlgoliaSearch("GJDCY9DKEW", "31f60dc3cc7926270934909c81f867ee");

// select indice (collection) of data to be accesed. In this case it would be the announcements
var index = client.initIndex('announcement');

Meteor.methods({
    'updateAnnouncement' : function(announcement, description, imgId, myID) {

        //updates object to the indice announcement
        //myID is hidden and can be accessed using .objectID on the announcement
        index.saveObject({
            announcement: announcement,
            description: description,
            imgId: imgId,
            objectID: myID
        }, function(err, content) {

            //error catch (server down, or algolia issue)
            if(err) {
                console.error('Algolia returned an error', err);
            } else {

                //Spits out the updated announcement with the keyword
                console.log('content', content);
            }
        });


    },
});