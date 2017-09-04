import { Suggestions } from './suggestions.js';

Meteor.methods({
    'postSuggestion' : function(json) {
        let accessLevel = Meteor.users.find({_id:Meteor.userId()}).accessLevel;
        if (accessLevel === 'teacher' || accessLevel === 'admin') {
            //TODO
        }
        let errStr = "", err = false;
        if (json.type !== "suggestion") {
            err = true;
            errStr += "Not an announcement. ";
        }
        if (!json.headline) {
            err = true;
            errStr += "Missing headline. ";
        }
        if (!json.content) {
            err = true;
            errStr += "Missing content. ";
        }
        if (!json.imgId) {
            err = true;
            errStr += "Missing image. ";
        }
        if (err) {
            throw new Meteor.Error(400, errStr);
        }

        //adds draft to the Posts collection
        Suggestions.insert(json, function(err, content) {
            //error catch for algolia issues
            if(err) {
                console.error(err);
            }
        });

    },
})
