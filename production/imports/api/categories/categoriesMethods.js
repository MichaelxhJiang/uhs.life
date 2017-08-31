/**
 * Created by Yonglin Wang on 8/30/2017.
 */
import categories from './categories.js'

Meteor.methods({
    'addNewCategory': function (details) {
        let categoryInfo = {
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
        categories.insert(categoryInfo);
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
        categories.update({_id: id},{$set: newCategory});
    }
});