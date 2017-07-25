//Server side method to be called from client to post announcement

// api key that connects the client side to Algolia's server
var client = AlgoliaSearch("GJDCY9DKEW", "31f60dc3cc7926270934909c81f867ee");

// select indice (collection) of data to be accesed. In this case it would be the announcements
var index = client.initIndex('announcement');

Meteor.methods({
    'postAnnouncement' : function(announcement, description) {

        //define object being posted with layout
        var objects = [{
            announcement: announcement,
            description: description
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