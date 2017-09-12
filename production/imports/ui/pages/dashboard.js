/**
 * Created by Yonglin Wang on 8/22/2017.
 */
import './dashboard.html'
import { Images } from '../../api/images/images.js';


Template.dashHome.onRendered(function () {
   Tracker.autorun(function () {
       Meteor.subscribe('posts');
       Meteor.subscribe('categories');
       Meteor.subscribe('allUsers');
   });
});

Template.dashHome.helpers({
    'post': function () {
        return Posts.find({
            'meta.approved': false,
            'type': 'announcement'
        });
    },
    'blogPost': function () {
        return Posts.find({
            'meta.approved': false,
            'type': 'blog'
        });
    },
    'writer': function () {
        //console.log(this);
        return Meteor.users.findOne({_id: this.author}).services.google.name;
    },
    'noImage': function () {
        return (this.subType === 'textOnly')
    },
    'imageLink': function () {
        try{
            return Images.findOne({_id: this.imgId}).url();
        }catch (e){

        }
    },
    'hasContent': function () {
        return this.subType !== 'imageOnly'
    }
});

Template.dashAnnouncements.helpers({
    'post': function () {
        return Posts.find({
            'meta.approved': true,
            'type': 'announcement'
        });
    },
    'blogPost': function () {
        return Posts.find({
            'meta.approved': true,
            'type': 'blog'
        });
    },
    'writer': function () {
        //console.log(this);
        return Meteor.users.findOne({_id: this.author}).services.google.name;
    },
    'noImage': function () {
        return (this.subType === 'textOnly')
    },
    'imageLink': function () {
        try{
            return Images.findOne({_id: this.imgId}).url();
        }catch (e){

        }
    },
    'hasContent': function () {
        return this.subType !== 'imageOnly'
    }
});

Template.dashSideBar.helpers({
    'username': function () {
        return Session.get('name');
    }
});

Template.dashCategories.helpers({
    'category': function () {
        return Categories.find({});
    },
    'featured': function () {
        return (this.featured) ? 'Yes' : 'No';
    },
    'date': function () {
        return moment(this.createdDate).format("MMMM Do YYYY")
    }
});

Template.dashUsers.helpers({
    'userList': function () {
        return Meteor.users.find({});
    },
    'img': function () {
        return this.services.google.picture;
    },
    'name': function () {
        return this.services.google.name;
    },
    'id': function () {
        return this._id;
    }
});

Template.dashboard.events({
    'click .new-post': function (evt) {
        let obj = $(evt.target).closest($('.new-post'));
        let id = obj.attr('id');
        Session.set('editingId', id);
        let info = Posts.findOne({_id: id});
        Session.set('dashEditorData', info);

        if(!$(evt.target).attr('class').includes('btn-reject') && !$(evt.target).attr('class').includes('btn-approve'))
            Modal.show('dashPostEditor');
    },
    'click .btn-approve': function (evt) {
        let obj = $(evt.target).closest($('.new-post'));
        let id = obj.attr('id');
        Meteor.call('posts.approvePost', id, function (err) {
            if(err){
                alertError("Error Occurred When Approving Post", err.message)
            }
        })
        //Post on Facebook
        setupFacebook(function(err, response) {
            if (err) {
                console.log(err);
            } else {
                let post = Session.get('dashEditorData');
                let type = post.type;
                if (type === 'announcement') {
                    let subType = post.subType;
                    if (subType === 'textOnly') {
                        postTextFacebook(post);
                    } else if (subType === 'imageOnly') {
                        postImageFacebook(post);
                    } else {
                        postTextImageFacebook(post);
                    }
                }
            }
        });
    },
    'click .btn-reject': function (evt) {
        let obj = $(evt.target).closest($('.new-post'));
        let id = obj.attr('id');
        Meteor.call('posts.removePost', id, function (err) {
            if(err){
                alertError("Error Occurred When Removing Post", err.message)
            }
        })
    }
});

Template.dashCategories.events({
    'click .btn-create-category': function () {
        Modal.show('dashCategoryEditor');
    },
    'click .btn-delete-category': function (evt) {
        let obj = $(evt.target).closest($('.dash-category-container'));
        let id = obj.attr('id');
        Meteor.call('category.remove', id, function (err) {
            if(err){
                alertError('Something Terrible Happened...', err.message);
            }
        })
    }
});

Template.dashUsers.events({
    'click .btn-modify-roles': function (evt) {
        let obj = $(evt.target).closest($('.dash-user-container'));
        let id = obj.attr('id');
        Session.set('editingUser', Meteor.users.findOne({_id: id}));
        Modal.show('dashRoleEditor');
    }
});

Template.dashRoleEditor.onRendered(function () {
    let data = Session.get('editingUser');
    console.log(data);
    $(document).ready(function () {
        $('#newUserRoles').select2({
            placeholder: "Click to select...",
            allowClear: false,
        });
        $("#newUserRoles").val(data.roles).trigger("change");
    });
});

Template.dashRoleEditor.helpers({
    'name': function () {
        return Session.get('editingUser').services.google.name;
    }
});

Template.dashRoleEditor.events({
   'submit .dash-role-edit': function (evt) {
       let data = Session.get('editingUser');
       evt.preventDefault();
       console.log($('#newUserRoles').val());
       Meteor.call('addUserToRole', data._id, $('#newUserRoles').val(), function (err) {
           if(err){
               alertError("Role Modification Failed!", err.message);
           }else{
               Modal.hide('dashRoleEditor');
               alertSuccess("Success!", "User Role has been successfully modified!")
           }
       })
   }
});

Template.dashCategoryEditor.onRendered(function () {
    let drop = initDropZone('newCategoryImage',{
        number: 1,
        size: 10,
        message: "Drop your image here or click to use the file browser"
    });
});

Template.dashPostEditor.onRendered(function () {
    let data = Session.get('dashEditorData');
    if(data.subType === 'imageOnly'){
        $('#newPostBody').hide()
    }else{
        $('#newPostBody').val(data.content);
    }
    $('#newPostHeadline').val(data.headline);
    $("#newPostTags").tagsinput('items');
    _.forEach(data.tags,function (item) {
        $('#newPostTags').tagsinput('add', item);
    });

    Tracker.autorun(function () {
        let categorySub = Meteor.subscribe('categories');
        if(categorySub.ready()){
            let categories = Categories.find({});
            categories.observeChanges({
                added: function(id, fields) {
                    let newCat = new Option(fields.name, fields.name);
                    $('#newPostCategories').append(newCat);
                }
            });
            $("#newPostCategories").val(data.categories).trigger("change");
        }
    });
    $(document).ready(function () {
        $('#newPostCategories').select2({
            placeholder: "Click to select matching categories",
            allowClear: true,
        });
    });
});

Template.dashCategoryEditor.events({
    'submit .dash-category-edit': function (evt) {
        evt.preventDefault();
        let json = {
            name: $('#newCategoryName').val(),
            description: $('#newCategoryDescription').val(),
            imgId: Session.get('categoryImageId'),
            featured: $('#newCategoryFeatured').is(':checked')
        };
        console.log(json);
        Meteor.call('category.addNew',json,function (err) {
            Modal.hide('dashCategoryEditor');
            if(err){
                alertError('Something Wrong Happened...', err.message);
            }
        })
    }
});

Template.dashPostEditor.events({
    'input .announcement-text': function (evt) {
        let maxlength = $(evt.target).attr("maxlength");
        let length = $(evt.target).val().length;

        if( length >= maxlength ){
            console.log("You have reached the maximum number of characters.");
            $('.announcement-counter').text(0);
        }else{
            $('.announcement-counter').text(maxlength - length);
        }
    },
    'submit .dash-announcement-edit': function (evt) {
        evt.preventDefault();
        let separators = [' , ', ', ', ',', ' ,'];
        let tags = $('#newPostTags').val().split(new RegExp(separators.join('|'), 'g'));
        let json = {
            headline: $('#newPostHeadline').val(),
            content: $('#newPostBody').val(),
            tags: tags
        };
        Posts.update({_id: Session.get('editingId')},{$set: json});
        Modal.hide();
    }
});


function initDropZone(id, info) {
    return new Dropzone("form#" + id, {
        maxFiles: info.number || 1,
        maxFilesize: info.size || 8,
        thumbnailWidth: 400,
        dictDefaultMessage: info.message || "Drop your image here, or click to select an image using the browser.",
        accept: function (file, done) {
            let FSFile = new FS.File(file);

            Images.insert(FSFile, function (err, fileObj) {
                if (err) {
                    console.log(err);
                } else {
                    //remove the currently uploaded image
                    //if there is none, this will not do anything
                    Images.remove({_id: Session.get('newImageId')}, function (err) {
                        if (err) {
                            console.log("error removing image:\n" + err);
                        }
                    });
                    //retreive file extension
                    hasUnsplash = false;
                    Session.set('newFileType', fileObj.extension());   //update the file type
                    Session.set('categoryImageId', fileObj._id); //update the image id to current image
                    done();
                }
            });
        }
    });
}