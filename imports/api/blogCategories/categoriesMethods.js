/**
 * Created by Yonglin Wang on 8/30/2017.
 */
import { BlogCategories } from './blogCategories.js';

Meteor.methods({
    'blogCategory.addNew': function (details) {
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
        BlogCategories.insert(categoryInfo);
    },
    'blogCategory.remove': function (query) {
        BlogCategories.remove({_id: query});
    },
    'blogCategory.update': function (id, details) {
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
        BlogCategories.update({_id: id},{$set: newCategory});
    }
});