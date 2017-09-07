/**
 * Created by Yonglin Wang on 8/30/2017.
 */
import { Categories } from './categories.js'

Meteor.methods({
    'addNewCategory': function (details) {
        let categoryInfo = {
            name: details.name,
            description: details.description,
            imageId: details.imgId || null,
            featured: details.featured || false,
            tracking: {
                numPost: 0,
                lastestPostIds: []
            },
            createdDate: new Date(),
            children: [],
            isSubCategory: false
        };
        Categories.insert(categoryInfo);
    },
    'removeCategory': function (query) {
        categories.remove({_id: query});
    },
    'updateCategory': function (id, details) {
        let newCategory = {
            name: details.name,
            description: details.description,
            imageId: details.imgId,
            featured: details.featured,
            tracking: {
                numPost: 0,
                lastestPostIds: []
            },
            createdDate: new Date(),
            children: [],
            isSubCategory: false
        };
        Categories.update({_id: id},{$set: newCategory});
    }
});