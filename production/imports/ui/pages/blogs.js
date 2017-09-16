/**
 * Created by Yonglin Wang on 9/12/2017.
 */
import './blogs.html'

let blogSub;

Template.blogs.onCreated(function () {
    Session.set('navTitle', 'Home of Stories ;; Here, you can browse and read content created by other users.');
});

Template.blogs.onRendered(function () {
    Tracker.autorun(function () {
        Meteor.subscribe('blogCategories');
        blogSub = Meteor.subscribe('blogs')
    })
});

Template.blogs.helpers({
    'blogCategories': function () {
        return BlogCategories.find({})
    }
});

Template.blogCategory.helpers({
    'categoryName': function () {
        return this.name;
    },
    'blogPreviews': function () {
        return Posts.find({
            'categories': this.name
        },{
            limit: 4
        });
    },
    'blogRow': function (cursor) {
        let result = [];
        let currentResultIndex = 0;
        let count = 0;
        cursor.forEach(function (item) {
            if(count % 4 === 0 ){
                if( count !== 0 ) currentResultIndex++;
                result.push({ items: [ item ] });
            }else {
                result[ currentResultIndex ].items.push( item );
            }
            count++;
        });
        return result;
    },
    'rowItems': function () {
        return this.items;
    }
});



Template.blogItem.onRendered(function () {
});

Template.blogItem.helpers({
    'imageLink': function () {
        if(this.unsplash){
            return this.unsplash.urls.full;
        }else if(this.imgId){
            try{
                return Images.findOne({_id: this.imgId}).url();
            }catch(e){
                //console.log('error getting photo')
            }
        }
    },
    'writer': function () {
        return Meteor.users.findOne({_id: this.author}).services.google.name;
    },
    'date': function () {
        return moment(this.releasedDate).format("MMMM Do YYYY");
    },
    'subtitle': function () {
        let string = this.subtitle;
        let length = 32;
        return string.length > length ?
            string.substring(0, length - 3) + "..." :
            string;
    }
});

Template.blogCategory.events({
    'click .view-all': function () {
        //blogSub.loadNextPage()
    }
});

Template.blogItem.events({
    'click .blog-item': function (evt,template) {
        let obj = $(evt.target).closest($('.blog-item'));
        let id = obj.attr('id');
        FlowRouter.go('/blog/'+id);
    }
})