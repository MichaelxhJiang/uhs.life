/**
 * Created by Yonglin Wang on 8/4/2017.
 */

import {Images} from '../../api/images/images.js';

import './editor.html';
let operationStack = ['.editor-open'];
let hasUnsplash = false;
let originalTitle = "";
Template.editor.onRendered(function () {

});

Template.blogDraft.onRendered(function () {
    Tracker.autorun(function () {
        Meteor.subscribeWithPagination('drafts', 10, Meteor.userId())
    })
});

Template.blogEditor.onRendered(function () {
    Tracker.autorun(function () {
        let categorySub = Meteor.subscribe('blogCategories');
        let courseSub = Meteor.subscribe('allCourses',1000);
        let clubSub = Meteor.subscribe('allClubs',1000);
        if(categorySub.ready()){
            let categories = BlogCategories.find({});
            categories.observeChanges({
                added: function(id, fields) {
                    let newCat = new Option(fields.name, fields.name);
                    $('#blogCategorySelect').append(newCat);
                }
            });
        }
        if(courseSub.ready() && clubSub.ready()){
            let courses = Courses.find({});
            let clubs = Clubs.find({});
            courses.observeChanges({
                added: function (id, fields) {
                    let newCat = new Option(fields.name + " - " + fields.code, fields.code);
                    $('#blogOrganizationSelect').append(newCat)
                }
            });
            clubs.observeChanges({
                added: function (id, fields) {
                    let newCat = new Option(fields.name, fields.code);
                    $('#blogOrganizationSelect').append(newCat)
                }
            })
        }
    });
    $(document).ready(function () {
        $('#blogCategorySelect').select2({
            placeholder: "Click to select matching categories",
            allowClear: true
        });
        $('#blogOrganizationSelect').select2({
            placeholder: "Click to select matching categories",
            allowClear: true
        });
        // Append it to the select
        $('.visibility-select').select2({
            placeholder: "Click to select the scope of this post",
        });
        $('.input-date').datepicker({
            startDate: '+1d'
        });
        let $editor = $('.editable');
        $editor.froalaEditor({
            scaytAutoload: false,
            //This setting can be completely ignored.
            scaytOptions: {
                enableOnTouchDevices: false,
                localization: 'en',
                extraModules: 'ui',
                DefaultSelection: 'American English',
                spellcheckLang: 'en_US',
                contextMenuSections: 'suggest|moresuggest',
                serviceProtocol: 'https',
                servicePort: '80',
                serviceHost: 'svc.webspellchecker.net',
                servicePath: 'spellcheck/script/ssrv.cgi',
                contextMenuForMisspelledOnly: true,
                scriptPath: 'https://demo.webspellchecker.net/froala/customscayt.js'
            },
            //ignore end
            toolbarButtons: ['fullscreen', '|', 'paragraphFormat', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertFile', 'insertVideo', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', '|', 'print', 'help', '|', 'undo', 'redo'],
            toolbarButtonsSM: ['fullscreen', '|', 'bold', 'italic', 'underline', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertFile', 'insertVideo', 'insertTable', '|', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'help', '|', 'undo', 'redo'],
            placeholderText: 'Tell your story here...',
            tableStyles: {
                class1: 'table',
            },
            paragraphFormat: {
                N: 'Normal',
                H2: 'Title',
                PRE: 'Code'
            },
            fileAllowedTypes: ['application/pdf', 'application/msword']
        });
        $editor.on('froalaEditor.image.beforeUpload', function (e, editor, images) {
            let self = $(this);

            Images.insert(images[0], function (err, fileObj) {
                //console.log("editor ",  editor);
                //console.log("after insert:", fileObj._id);
                Tracker.autorun(function (c) {
                    fileObj = Images.findOne(fileObj._id);
                    let url = fileObj.url();
                    if (url) {
                        let imgList = $('img.fr-fic');
                        self.froalaEditor('image.insert', url, true);
                        imgList[imgList.length - 1].remove();
                        return {
                            link: url
                        };
                    }
                });
            });
        });
        if (Meteor.isClient) {
            Dropzone.autoDiscover = false;
            $(".tags").tagsinput('items');
            let blogDrop = initDropZone('dropzone', {
                number: 1,
                size: 8,
                message: "Drop an image here to be the featured image, or click to select an image using the browser.",
            });
        }
    });
});

Template.announcementEditor.onRendered(function () {
    Tracker.autorun(function () {
        let categorySub = Meteor.subscribe('categories');
        let clubSub = Meteor.subscribe('allClubs',100);
        if(categorySub.ready()){
            let categories = Categories.find({});
            categories.observeChanges({
                added: function(id, fields) {
                    let newCat = new Option(fields.name, fields.name);
                    $('.announcement-category').append(newCat);
                }
            });
        }
        if(clubSub.ready()){
            let clubs = Clubs.find({});
            clubs.observeChanges({
                added: function(id, fields) {
                    let newCat = new Option(fields.name, fields.name);
                    $('.clubs-category').append(newCat);
                }
            });
        }
    });
    $(document).ready(function () {
        $('.category-select').select2({
            placeholder: "Click to select matching categories",
            allowClear: true
        });
        $('.input-daterange').datepicker({
            startDate: '+1d'
        });
        if (Meteor.isClient) {
            let arrayOfImageIds = [];
            Dropzone.autoDiscover = false;
            $(".tags").tagsinput('items');
            let announcementDrop = initDropZone("announcementImage", {
                number: 1,
                size: 8,
                message: "Drop your poster here, or click to select an image using the browser.",
            });
            let announcementImageTwo = initDropZone("announcementImageTwo", {
                number: 1,
                size: 8,
                message: "Drop your poster here, or click to select an image using the browser."
            });
        }

    });
});

Template.suggestionEditor.onRendered(function () {
    let suggestionDrop = initDropZone('suggestionImage', {
        number: 1,
        size: 8
    });
});

Template.announcementOptions.onRendered(function () {
    this.$(".announce-tags").tagsinput('items');
});

Template.editor.helpers({
    'canEdit': function () {
        return Roles.userIsInRole(Meteor.userId(),['teacher','blogEditor','announcementEditor','admin']);
    },
    'canWriteAnnounce': function () {
        return Roles.userIsInRole(Meteor.userId(),['teacher','admin','announcementEditor'])
    },
    'canWriteBlog': function () {
        return Roles.userIsInRole(Meteor.userId(),['teacher','admin','blogEditor'])
    }
});

Template.blogDraft.helpers({
    'drafts': function () {
        return Drafts.find({})
    },
    'draftedDate': function () {
        return moment(this.draftedDate).format('MMMM Do YYYY')
    },
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
    'isBlog': function () {
        return this.type === 'blog'
    }
});



/* Events */
Template.editor.events({
    'click #openEditor': function () {
        originalTitle = Session.get('DocumentTitle');
        Session.set('DocumentTitle', 'Composer | uhs.life');

        swapElements('.editor-open', '.editor-main');
        if (operationStack.length === 1) {
            operationStack.push('.blog-intro');
        }
        $('html, body').css({
            overflow: 'hidden'
        }); // Disables the Scrolling
    },
    'click #startNewDraft': function () {
        swapElements('.blog-intro', '.post-type');
        operationStack.push('.post-type');
    },
    'click #checkDrafts': function () {
        swapElements('.blog-intro', '.blog-drafts');
        operationStack.push('.blog-drafts');
    },
    'click #startBlog': function () {
        swapElements('.post-type', '.blog-editor');
        operationStack.push('.blog-editor');
        Session.set('announcementType', 'blog');
    },
    'click #startAnnouncement': function () {
        swapElements('.post-type', '.announcement-menu');
        operationStack.push('.announcement-menu');
    },
    'click #startSuggestion': function () {
        swapElements('.post-type', '.suggestions');
        operationStack.push('.suggestions');
        Session.set('announcementType', 'suggestion');
    },
    'click .editor-close': function () {
        Session.set('DocumentTitle', originalTitle);
        swapElements('.editor-main', '.editor-open');
        $('html, body').css({
            overflow: 'visible'
        }); // Disables the Scrolling
    },
    'click .editor-back': function () {
        if (operationStack.length - 2 === 0) {
            Session.set('DocumentTitle', originalTitle);
            swapElements('.editor-main', '.editor-open');
            $('html, body').css({
                overflow: 'visible'
            }); // Enables the Scrolling
        } else {
            swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
        }
        operationStack.pop();
    },
    'click #imageOnly': function () {
        swapElements('.announcement-menu', '.image-only');
        operationStack.push('.image-only');
        Session.set('announcementType', 'imageOnly');
    },
    'click #textOnly': function () {
        swapElements('.announcement-menu', '.text-only');
        operationStack.push('.text-only');
        Session.set('announcementType', 'textOnly');
    },
    'click #textAndImage': function () {
        swapElements('.announcement-menu', '.text-and-image');
        operationStack.push('.text-and-image');
        Session.set('announcementType', 'textAndImage');
    },
    'input .announcement-text': function (evt) {
        let maxlength = $(evt.target).attr("maxlength");
        let length = $(evt.target).val().length;

        if (length >= maxlength) {
            console.log("You have reached the maximum number of characters.");
            $('.announcement-counter').text(0);
        } else {
            $('.announcement-counter').text(maxlength - length);
        }
    },
    'click .priority-toggle': function (evt) {
        let priority = $(evt.target).attr('data-priority');
        $('.is-checked').removeClass('is-checked');
        $(evt.target).addClass('is-checked');
        Session.set('priority', priority);
    }
});

Template.blogEditor.events({
    'click .publish': function (event, template) {
        let json = constructBlogJson();

        Meteor.call('posts.postBlog', json, function (err) {
            if (err) {
                alertError('Post Failed!', err.message);
            } else {
                alertSuccess('Success!', 'The post has been submitted.');
                Drafts.remove({_id: Session.get('draftEditItem')});
                Session.set('draftEditItem', null);
                // Go back
                if (operationStack.length - 2 === 0) {
                    swapElements('.editor-main', '.editor-open');
                    $('html, body').css({
                        overflow: 'visible'
                    }); // Enables the Scrolling
                } else {
                    swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                }
                operationStack.pop();
            }
        });
    },
    'click .save-draft' : function() {
        let json = constructBlogJson();

        if(Session.get('draftEditItem')){
            Drafts.update({_id: Session.get('draftEditItem')}, json, function (err) {
                if(err){
                    alertError('Saving Draft Failed!', err.message);
                }else{
                    alertSuccess("Saved!","")
                }
            });
        }else{
            Meteor.call('drafts.postDraftBlog', json, function (err) {
                if (err) {
                    alertError('Saving Draft Failed!', err.message);
                } else {
                    alertSuccess('Success!', 'The draft has been saved.');
                }
            });
        }
    },
    'click #getFeaturedUnsplash': function (evt, template) {
        $('#unsplashPrompt').html("<i class='fa fa-spinner fa-pulse fa-fw'></i> Please Wait...");
        Meteor.call('setupUnsplash', function (err) {
            if (err) {
                console.log(err);
                hasUnsplash = false;
            } else {
                Meteor.call('getRandomPhoto', "nature", function (err, data) {
                    if (err) {
                        console.log(err);
                        $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one.");
                        hasUnsplash = false;
                    } else {
                        console.log(data);
                        let num = getRandomInt(0, data.results.length-1);
                        Session.set('unsplash_img', data.results[num].id);
                        Session.set('unsplashData',data.results[num]);
                        hasUnsplash = true;
                        $('#dropzone').replaceWith("<img src='" + data.results[num].urls.regular + "' class='img-responsive unsplash-container'/>");
                        $('#unsplashPrompt').html("Here you go! This image is by <a href='"+ data.results[num].user.links.html +"'>"+ data.results[num].user.name +"</a> from "+ data.results[num].user.location +" via <b>Unsplash</b>. <br><br> This will be your featured image, if you want another one <a href='' id='newUnsplash'>Click Here</a> Changed your mind? click here to <a href='' id='newUpload'>upload a new image</a>");
                    }
                })
            }
        })
    },
    'click #newUnsplash': function () {
        $('#unsplashPrompt').html("<i class='fa fa-spinner fa-pulse fa-fw'></i> Please Wait...");
        Meteor.call('getRandomPhoto', function (err, data) {
            if (err) {
                console.log(err);
                $('.unsplash-container').replaceWith("<form action='/file-upload' class='dropzone' id='dropzone'></form>");
                $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one instead.");
                hasUnsplash = false;
            } else {
                console.log(data);
                Session.set('unsplash_img', data.id);
                Session.set('unsplashData',data);
                $('.unsplash-container').replaceWith("<img src='" + data.urls.regular + "' class='img-responsive unsplash-container'/>");
                $('#unsplashPrompt').html("Here you go! This image is by <a href='"+ data.user.links.html +"'>"+ data.user.name +"</a> from "+ data.user.location +" via <b>Unsplash</b>. <br><br> Want a differnt one? <a href='' id='newUnsplash'>Click Here</a>. Changed your mind? click here to <a href='' id='newUpload'>upload a new image</a>");
            }
        })
    },
    'click #newUpload': function () {
        $('.unsplash-container').replaceWith("<form action='/file-upload' class='dropzone' id='dropzone'></form>");
        let blogDrop = initDropZone('dropzone', {
            number: 1,
            size: 8,
            message: "Drop an image here to be the featured image, or click to select an image using the browser.",
        });
        $('#unsplashPrompt').html("Want to avoid the hassle? <a href='' id='getFeaturedUnsplash'>Click here</a> and we will find an image for you!");
    },
    'click .btn-preview': function () {
        let imageID = (hasUnsplash) ? Session.get('unsplash_img') : Session.get('newImageId');
        let previewPost = {
            title: $('#blogTitle').val() + " (This is a preview)",
            subtitle: $('#blogSubTitle').val(),
            content: $('.editable').froalaEditor('html.get'),
            tags: $(".tags").val(),
            unsplash: Session.get('unsplashData'),
            imgId: imageID,
            meta: {
                hasUnsplash: hasUnsplash,
            }
        };
        Session.setPersistent('preview_json', previewPost);
        $('html, body').css({
            overflow: 'visible'
        }); // Enables the Scrolling
        window.open('/blog/preview', '_blank');
    }
});

Template.announcementOptions.events({
    'click .btn-post': function (event, template) {
        let type = Session.get('announcementType');
        let json = constructAnnouncementJson(type);
        if (type === "imageOnly") {
            Meteor.call('posts.postImage', json, function (err) {
                if (err) {
                    alertError('Posting Failed!', err.message);
                } else {
                    alertSuccess('Success!', 'The post has been submitted.');
                    Drafts.remove({_id: Session.get('draftEditItem')});
                    Session.set('draftEditItem', null);
                    if (operationStack.length - 2 === 0) {
                        swapElements('.editor-main', '.editor-open');
                        $('html, body').css({
                            overflow: 'visible'
                        }); // Enables the Scrolling
                    } else {
                        swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                    }
                    operationStack.pop();
                }
            });

        } else if (type === "textOnly") {
            Meteor.call('posts.postText', json, function (err) {
                if (err) {
                    alertError('Post Failed!', err.message);
                } else {
                    alertSuccess('Success!', 'The post has been submitted.');
                    Drafts.remove({_id: Session.get('draftEditItem')});
                    Session.set('draftEditItem', null);
                    if (operationStack.length - 2 === 0) {
                        swapElements('.editor-main', '.editor-open');
                        $('html, body').css({
                            overflow: 'visible'
                        }); // Enables the Scrolling
                    } else {
                        swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                    }
                    operationStack.pop();
                }
            });
        } else if (type === 'textAndImage') {
            Meteor.call('posts.postTextImage', json, function (err) {
                if (err) {
                    alertError('Post Failed!', err.message);
                } else {
                    alertSuccess('Success!', 'The post has been submitted.');
                    Drafts.remove({_id: Session.get('draftEditItem')});
                    Session.set('draftEditItem', null);
                    if (operationStack.length - 2 === 0) {
                        swapElements('.editor-main', '.editor-open');
                        $('html, body').css({
                            overflow: 'visible'
                        }); // Enables the Scrolling
                    } else {
                        swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                    }
                    operationStack.pop();
                }
            });
        }

    },
    'click .btn-save': function() {
        let type = Session.get('announcementType');
        let json = constructAnnouncementJson(type);

        if(Session.get('draftEditItem')){
            console.log(json);
            Drafts.update({_id: Session.get('draftEditItem')}, json, function (err) {
                if(err){
                    alertError('Saving Draft Failed!', err.message);
                }else{
                    alertSuccess("Saved!","");
                    if (operationStack.length - 2 === 0) {
                        swapElements('.editor-main', '.editor-open');
                        $('html, body').css({
                            overflow: 'visible'
                        }); // Enables the Scrolling
                    } else {
                        swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                    }
                    operationStack.pop();
                }
            });
        }else{
            if (type === "imageOnly") {

                Meteor.call('drafts.postDraftImage', json, function (err) {
                    if (err) {
                        alertError('Saving Draft Failed!', err.message);
                    } else {
                        alertSuccess('Success!', 'The draft has been saved.');

                        if (operationStack.length - 2 === 0) {
                            swapElements('.editor-main', '.editor-open');
                            $('html, body').css({
                                overflow: 'visible'
                            }); // Enables the Scrolling
                        } else {
                            swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                        }
                        operationStack.pop();
                    }
                });

            } else if (type === "textOnly") {

                Meteor.call('drafts.postDraftText', json, function (err) {
                    if (err) {
                        alertError('Saving Draft Failed!', err.message);
                    } else {
                        alertSuccess('Success!', 'The draft has been saved.');
                        if (operationStack.length - 2 === 0) {
                            swapElements('.editor-main', '.editor-open');
                            $('html, body').css({
                                overflow: 'visible'
                            }); // Enables the Scrolling
                        } else {
                            swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                        }
                        operationStack.pop();
                    }
                });
            } else if (type === 'textAndImage') {
                Meteor.call('drafts.postDraftTextImage', json, function (err) {
                    if (err) {
                        alertError('Saving Draft Failed!', err.message);
                    } else {
                        alertSuccess('Success!', 'The draft has been saved.');
                        if (operationStack.length - 2 === 0) {
                            swapElements('.editor-main', '.editor-open');
                            $('html, body').css({
                                overflow: 'visible'
                            }); // Enables the Scrolling
                        } else {
                            swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                        }
                        operationStack.pop();
                    }
                });
            }
        }


    }
});
Template.blogDraft.events({
    'click .btn-delete-draft': function (evt) {
        let obj = $(evt.target).closest($('.draft-item'));
        let id = obj.attr('id');
        Meteor.call('drafts.remove', id, function (err) {
            if(err){
                alertError("Something went wrong when deleting the draft", err.message);
            }
        })
    },
    'click .btn-publish-draft': function (evt) {
        let obj = $(evt.target).closest($('.draft-item'));
        let id = obj.attr('id');
        let json = Drafts.findOne({_id: id});
        let type = json.subType;
        if(json.type === 'blog'){
            Meteor.call('posts.postBlog', json, function (err) {
                if (err) {
                    alertError('Post Failed!', err.message);
                } else {
                    alertSuccess('Success!', 'The post has been submitted.');
                    Drafts.remove({_id: id});
                }
            })
        }else{
            if (type === "imageOnly") {
                Meteor.call('posts.postImage', json, function (err) {
                    if (err) {
                        alertError('Posting Failed!', err.message);
                    } else {
                        alertSuccess('Success!', 'The post has been submitted.');
                        Drafts.remove({_id: id});
                    }
                });

            } else if (type === "textOnly") {
                Meteor.call('posts.postText', json, function (err) {
                    if (err) {
                        alertError('Post Failed!', err.message);
                    } else {
                        alertSuccess('Success!', 'The post has been submitted.');
                        Drafts.remove({_id: id});
                    }
                });
            } else if (type === 'textAndImage') {
                Meteor.call('posts.postTextImage', json, function (err) {
                    if (err) {
                        alertError('Post Failed!', err.message);
                    } else {
                        alertSuccess('Success!', 'The post has been submitted.');
                        Drafts.remove({_id: id});
                    }
                });
            }
        }
    },
    'click .draft-item': function (evt) {
        if(!$(evt.target).hasClass('btn-delete-draft') && !$(evt.target).hasClass('btn-publish-draft')){
            let obj = $(evt.target).closest($('.draft-item'));
            let id = obj.attr('id');
            Session.set('draftEditItem', id);
            setEditorContent(Drafts.findOne({_id: id}));
            console.log(Session.get('draftEditItem'));
        }
    }
});
Template.suggestionEditor.events({
    'click .btn-post': function () {
        let headline = $('#suggestionHeadline').val();
        let content = $('.announcement-text')[2].value;
        let imgId = Session.get('newImageId');

        let authorId = Meteor.userId();
        let draftedDate = new Date();

        if (!imgId) {
            //TODO
            console.log('No image uploaded');
        }
        if (!headline) {
            //TODO
            console.log('No headline entered');
        }
        if (!content) {
            //TODO
            console.log('No content entered')
        }

        let json = {
            author: authorId,
            type: 'suggestion',
            headline: headline,
            content: content,
            draftedDate: draftedDate,
            imgId: imgId
        };
        console.log(json);

        Meteor.call('posts.postSuggestion', json, function (err) {
            console.log('posted');
            if (err) {
                alertError('Post Failed!', err.message);
            } else {
                alertSuccess('Success!', 'The post has been submitted.');
                if (operationStack.length - 2 === 0) {
                    swapElements('.editor-main', '.editor-open');
                    $('html, body').css({
                        overflow: 'visible'
                    }); // Enables the Scrolling
                } else {
                    swapElements(operationStack[operationStack.length - 1], operationStack[operationStack.length - 2]);
                }
                operationStack.pop();
            }
        });
    }
});

function initDropZone(id, info) {
    return new Dropzone("form#" + id, {
        maxFiles: info.number || 1,
        maxFilesize: info.size || 8,
        thumbnailWidth: 400,
        addRemoveLinks: true,
        dictDefaultMessage: info.message || "Drop your image here, or click to select an image using the browser.",
        accept: function (file, done) {
            $('.quick-image-prompt').html('');
            let FSFile = new FS.File(file);
            Images.insert(FSFile, function (err, fileObj) {
                if (err) {
                    console.log(err);
                } else {
                    Images.remove({_id: Session.get('newImageId')}, function (err) {
                        if (err) {
                            console.log("error removing image:\n" + err);
                        }
                    });
                    hasUnsplash = false;
                    Session.set('newFileLink', fileObj.extension());   //update the file type
                    Session.set('newImageId', fileObj._id); //update the image id to current image
                    done();
                }
            });
        }
    });
}
function swapElements(a, b) {
    $(a).fadeOut('fast', function () {
        $(b).fadeIn("slow");
    });
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function setEditorContent(json) {
    console.log(json);
    if(json.type === 'blog'){
        $('#blogTitle').val(json.title);
        $('#blogSubTitle').val(json.subtitle);
        $('.editable').froalaEditor('html.set', json.content);
        _.forEach(json.tags,function (item) {
            $('.tags').tagsinput('add', item);
        });
        $('.visibility-select').val(json.meta.visibility).trigger("change");
        $(".category-select").val(json.categories).trigger("change");
        $("#blogOrganizationSelect").val(json.organizationsValues).trigger("change");
        $('.input-date').datepicker('update', json.releaseDate);
        if(json.unsplash){
            Meteor.call('setupUnsplash', function (err) {
                if (err) {
                    console.log(err);
                    $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one.");
                } else {
                    Meteor.call('getPhoto', json.imgId, function (err, data) {
                        if (err) {
                            console.log(err);
                            $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one.");
                        } else {
                            Session.set('unsplash_img', data.id);
                            Session.set('unsplashData',data);
                            hasUnsplash = true;
                            $('#dropzone').replaceWith("<img src='" + data.urls.regular + "' class='img-responsive unsplash-container'/>");
                            $('#unsplashPrompt').html("Here you go! This image is by <a href='"+ data.user.links.html +"'>"+ data.user.name +"</a> from "+ data.user.location +" via <b>Unsplash</b>. <br><br> This will be your featured image, if you want another one <a href='' id='newUnsplash'>Click Here</a> Changed your mind? click here to <a href='' id='newUpload'>upload a new image</a>");
                        }
                    })
                }
            })
        }
        swapElements('.blog-drafts', '.blog-editor');
        operationStack.push('.blog-editor');
        Session.set('announcementType', 'blog');
    }else if(json.type === 'announcement'){
        if(json.subType === 'imageOnly'){
            $('#imageOnlyHeadline').val(json.headline);
            if(json.imgId){
                Session.set('newImageId', json.imgId);
                $('.quick-image-prompt').html('You have already uploaded an image, if you would like to change it, simply add a different one. Otherwise, simply ignore the box.')
            }
            _.forEach(json.tags,function (item) {
                $('.announce-tags:eq(0)').tagsinput('add', item);
            });
            $(".announcement-category:eq(0)").val(json.categories).trigger("change");
            $(".clubs-category:eq(0)").val(json.clubs).trigger("change");
            $('.startDate:eq(0)').datepicker('update',json.startDate);
            $('.endDate:eq(0)').datepicker('update',json.endDate);
            swapElements('.blog-drafts', '.image-only');
            operationStack.push('.image-only');
            Session.set('announcementType', 'imageOnly');
        }else if(json.subType === 'textOnly'){
            $('#textOnlyHeadline').val(json.headline);
            $('.announcement-text:eq(0)').val(json.content);
            _.forEach(json.tags,function (item) {
                $('.announce-tags:eq(1)').tagsinput('add', item);
            });
            $(".announcement-category:eq(1)").val(json.categories).trigger("change");
            $(".clubs-category:eq(1)").val(json.clubs).trigger("change");
            $('.startDate:eq(1)').datepicker('update',json.startDate);
            $('.endDate:eq(1)').datepicker('update',json.endDate);
            swapElements('.blog-drafts', '.text-only');
            operationStack.push('.text-only');
            Session.set('announcementType', 'textOnly');
        }else if(json.subType === 'imageText'){
            $('#textImageHeadline').val(json.headline);
            if(json.imgId){
                Session.set('newImageId', json.imgId);
                $('.quick-image-prompt').html('You have already uploaded an image, if you would like to change it, simply add a different one. Otherwise, simply ignore the box.')
            }
            $('.announcement-text:eq(1)').val(json.content);
            $(".announcement-category:eq(2)").val(json.categories).trigger("change");
            $(".clubs-category:eq(2)").val(json.clubs).trigger("change");
            $('.startDate:eq(2)').datepicker('update',json.startDate);
            $('.endDate:eq(2)').datepicker('update',json.endDate);
            Session.set('priority', json.meta.priority);
            $('.is-checked').removeClass('is-checked');
            $(".priority-toggle[data-priority="+ Session.get('priority') +"]").addClass('is-checked');
            swapElements('.blog-drafts', '.text-and-image');
            operationStack.push('.text-and-image');
            Session.set('announcementType', 'textAndImage');
        }
    }
}
function constructBlogJson(){
    let title = $('#blogTitle').val();
    let subtitle = $('#blogSubTitle').val();
    let content = $('.editable').froalaEditor('html.get');
    let str = $(".tags").val();
    let separators = [' , ', ', ', ',', ' ,'];
    let tags = str.split(new RegExp(separators.join('|'), 'g'));
    let imgId = (hasUnsplash) ? Session.get('unsplash_img') : Session.get('newImageId');
    let releaseDate = new Date($('.input-date').val());
    let draftedDate = new Date();
    let options = $('.category-select')[0].options;
    let categories = [];
    for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        if (opt.selected) {
            categories.push(opt.value);
        }
    }
    let orgOptions = document.getElementById('blogOrganizationSelect').options;
    let orgNames = [], orgVal = [];
    for (let i = 0; i < orgOptions.length; i++) {
        let opt = orgOptions[i];
        if (opt.selected) {
            orgNames.push(opt.text);
            orgVal.push(opt.value);
        }
    }
    let authorId = Meteor.userId();
    let imageFirst = null;
    //meta
    let visibility = $('.visibility-select')[0].value;

    return {
        author: authorId,
        type: 'blog',
        releaseDate: releaseDate,
        draftedDate: draftedDate,
        title: title,
        subtitle: subtitle,
        content: content,
        tags: tags,
        categories: categories,
        imgId: imgId,
        unsplash: Session.get('unsplashData'),
        organizationsNames: orgNames,
        organizationsValues: orgVal,
        meta: {
            imageFirst: imageFirst,
            hasUnsplash: hasUnsplash,
            visibility: visibility
        }
    };
}
function constructAnnouncementJson(type){
    if (type === "imageOnly") {
        console.log('constructing image only');
        let headline = $('#imageOnlyHeadline').val();
        let imgId = Session.get('newImageId');
        let separators = [' , ', ', ', ',', ' ,'];
        let tags = $(".announce-tags")[0].value.split(new RegExp(separators.join('|'), 'g'));
        let options = $('.announcement-category')[0].options;
        let categories = [];
        for (let i = 0; i < options.length; i++) {
            let opt = options[i];
            if (opt.selected) {
                categories.push(opt.value);
            }
        }
        let clubs = $('.clubs-category')[0].options;
        let clubList = [];
        for (let i = 0; i < clubs.length; i++) {
            let opt = clubs[i];
            if (opt.selected) {
                clubList.push(opt.value);
            }
        }
        let authorId = Meteor.userId();
        let startDate = new Date($('.startDate')[0].value);
        let endDate = new Date($('.endDate')[0].value);
        let draftedDate = new Date();
        let visibility = $('.visibility-select')[1].value;
        if (!imgId) {
            alertError('Post Incomplete!', "You haven't uploaded an image yet!")
        }
        if (!headline) {
            //TODO
            alertError('Post Incomplete!', "You haven't added a headline!")
        }
        if(!startDate || !endDate){
            alertError('Post Incomplete!', "You haven't added a date!")
        }
        return {
            author: authorId,
            type: 'announcement',
            subType: 'imageOnly',
            startDate: startDate,
            endDate: endDate,
            draftedDate: draftedDate,
            headline: headline,
            tags: tags,
            categories: categories,
            imgId: imgId,
            clubs: clubList,
            meta: {
                hasUnsplash: hasUnsplash,
                visibility: visibility
            }
        };
    } else if (type === "textOnly") {
        let headline = $('#textOnlyHeadline').val();
        let content = $('.announcement-text')[0].value;
        let separators = [' , ', ', ', ',', ' ,'];
        let tags = $(".announce-tags")[1].value.split(new RegExp(separators.join('|'), 'g'));

        let options = $('.announcement-category')[1].options;
        let categories = [];

        for (let i = 0; i < options.length; i++) {
            let opt = options[i];
            if (opt.selected) {
                categories.push(opt.value);
            }
        }
        let visibility = $('.visibility-select')[2].value;
        let authorId = Meteor.userId();
        let startDate = new Date($('.startDate')[1].value);
        let endDate = new Date($('.endDate')[1].value);
        let draftedDate = new Date();
        let clubs = $('.clubs-category')[1].options;
        let clubList = [];
        for (let i = 0; i < clubs.length; i++) {
            let opt = clubs[i];
            if (opt.selected) {
                clubList.push(opt.value);
            }
        }
        //meta

        if (!content) {
            alertError('Post Incomplete!', "You haven't added any content yet!")
        }
        if (!headline) {
            //TODO
            alertError('Post Incomplete!', "You haven't added a headline!")
        }
        if(!startDate || !endDate){
            alertError('Post Incomplete!', "You haven't added a date!")
        }

        return {
            author: authorId,
            type: 'announcement',
            subType: 'textOnly',
            startDate: startDate,
            endDate: endDate,
            draftedDate: draftedDate,
            headline: headline,
            content: content,
            tags: tags || [],
            categories: categories || [],
            clubs: clubList,
            meta: {
                hasUnsplash: hasUnsplash,
                visibility: visibility
            }
        };
    } else if (type === 'textAndImage') {
        let headline = $('#textImageHeadline').val();
        let content = $('.announcement-text')[1].value;
        let imgId = Session.get('newImageId');
        let str = $(".announce-tags")[2].value;
        let separators = [' , ', ', ', ',', ' ,'];
        let tags = str.split(new RegExp(separators.join('|'), 'g'));

        let options = $('.announcement-category')[2].options;
        let categories = [];

        for (let i = 0; i < options.length; i++) {
            let opt = options[i];
            if (opt.selected) {
                categories.push(opt.value);
            }
        }
        let visibility = $('.visibility-select')[3].value;
        let authorId = Meteor.userId();
        let startDate = new Date($('.startDate')[2].value);
        let endDate = new Date($('.endDate')[2].value);
        let draftedDate = new Date();
        let clubs = $('.clubs-category')[2].options;
        let clubList = [];
        for (let i = 0; i < clubs.length; i++) {
            let opt = clubs[i];
            if (opt.selected) {
                clubList.push(opt.value);
            }
        }
        //meta
        let priority = Session.get('priority');
        if (!imgId) {
            alertError('Post Incomplete!', "You haven't uploaded an image yet!")
        }
        if (!headline) {
            //TODO
            alertError('Post Incomplete!', "You haven't added a headline!")
        }
        if(!startDate || !endDate){
            alertError('Post Incomplete!', "You haven't added a date!")
        }
        if (!content) {
            //TODO
            alertError('Post Incomplete!', "You haven't added any information!")
        }

        return {
            author: authorId,
            type: 'announcement',
            subType: 'imageText',
            headline: headline,
            content: content,
            startDate: startDate,
            endDate: endDate,
            draftedDate: draftedDate,
            tags: tags || [],
            categories: categories || [],
            imgId: imgId,
            clubs: clubList,
            meta: {
                priority: priority || 'image',
                hasUnsplash: hasUnsplash,
                visibility: visibility
            }
        };
    }
}