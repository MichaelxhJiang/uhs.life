//setup for use of search in algolia database

// api key that connects the client side to Algolia's server
var client = AlgoliaSearch("GJDCY9DKEW", "1881fcb5fac28b033952f92b1bc33430");

// select indice (collection) of data to be accesed. In this case it would be the announcements
var index = client.initIndex('announcement');

index.setSettings({
    searchableAttributes: [
        'title',
    ]
});

//function to search for announcements with a keyword
searchPost = function(keyword) {

    //performs the search in algolia database in indice announcement
    index.search(keyword, function searchDone(err, content) {

        //error catch (server down, or algolia issue)
        if(err) {
            console.error('Algolia returned an error', err);
        } else {

            //retrieves number of results in content.nbHits
            console.log('Received ' + content.nbHits + ' results.');

            //Spits out list of announcements with the keyword
            Session.set('content', content);
        }
    });
}

