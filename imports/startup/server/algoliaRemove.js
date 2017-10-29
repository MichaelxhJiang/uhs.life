//Server side method to be called from client to remove an existing announcement

// api key that connects the client side to Algolia's server
var client = AlgoliaSearch("GJDCY9DKEW", "31f60dc3cc7926270934909c81f867ee");

// select indice (collection) of data to be accesed. In this case it would be the announcements
var index = client.initIndex('announcement');

Meteor.methods({
    'removeAnnouncement' : function(myID) {

        //removes object to the indice announcement
        //myID is hidden and can be accessed using .objectID on the announcement
        index.deleteObject(myID, function(err) {
            if(err) {
                //error catch (server down, or algolia issue)
                console.error('Algolia returned an error', err);
            } else {
                //object succesfully removed
                console.log('announcement removed');
            }
        });

    },
});