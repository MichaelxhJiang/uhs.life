/**
 * Created by Yonglin Wang on 8/4/2017.
 */
import { FilesCollection } from 'meteor/ostrio:files';
import { Images } from "../../api/images/images.js";

import './editor.html';
import './editorComponents/videoAnnouncement.js';
import './editorComponents/announcementEditor.js';
import './editorComponents/editorLib.js';

let operationStack = ['.editor-open'];
let hasUnsplash = false;
let originalTitle = "";
let allPosts = null;
let blogDrop = null;
let selectConfig = {
    placeholder: "Click to select",
    allowClear: true,
    minimumResultsForSearch: -1
};
Template.allPosts.onRendered(function () {
    Tracker.autorun(function () {
        allPosts = Meteor.subscribeWithPagination('postsByUser', 20);
        Meteor.subscribe('files.images.all');
    });
});

Template.blogDraft.onRendered(function () {
    Tracker.autorun(function () {
        Meteor.subscribeWithPagination('drafts', 10);
        Meteor.subscribe('files.images.all');
    });
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
                    $('#blogOrganizationSelect').append(newCat);
                }
            });
            clubs.observeChanges({
                added: function (id, fields) {
                    let newCat = new Option(fields.name, fields.code);
                    $('#blogOrganizationSelect').append(newCat);
                }
            });
        }
    });
    $(document).ready(function () {
        $('#blogCategorySelect').select2(selectConfig);
        $('#blogOrganizationSelect').select2(selectConfig);
        // Append it to the select
        $('.visibility-select').select2(selectConfig);
        $('.input-date').datepicker({
            startDate: '+0d'
        });
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            $(".select2-search__field").attr("readonly", true);
        }
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
            const uploader = Images.insert({
                file: images[0],
                streams: 'dynamic',
                chunkSize: 'dynamic'
            }, false);

            uploader.on('end', function (error, fileObj) {
                if (error) {
                    alert('Error during upload: ' + error);
                } else {
                    alert('File "' + fileObj.name + '" successfully uploaded');
                    Tracker.autorun(function (c) {
                        const file = Images.findOne(fileObj._id);
                        let url = file.link();
                        if (url) {
                            let imgList = $('img.fr-fic');
                            self.froalaEditor('image.insert', url, true);
                            imgList[imgList.length - 1].remove();
                            return {
                                link: url
                            };
                        }
                    });
                }
            });
            uploader.on('error', function (error, fileObj) {
                alert('Error during upload: ' + error);
            });
            uploader.start();
        });
        if (Meteor.isClient) {
            Dropzone.autoDiscover = false;
            $(".tags").tagsinput('items');
            blogDrop = initDropZone('dropzone', {
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
        $('.category-select').select2(selectConfig);
        $('.input-daterange').datepicker({
            startDate: '+0d'
        });
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            $(".select2-search__field").attr("readonly", true);
        }
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

Template.republishTime.onRendered(function () {
    $(document).ready(function () {
        $('.input-daterange').datepicker({
            startDate: '+0d'
        });
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
        return Roles.userIsInRole(Meteor.userId(),['teacher','admin','announcementEditor']);
    },
    'canWriteBlog': function () {
        return Roles.userIsInRole(Meteor.userId(),['teacher','admin','blogEditor']);
    }
});

Template.blogDraft.helpers({
    'drafts': function () {
        return Drafts.find({});
    },
    'draftedDate': function () {
        return moment(this.draftedDate).format('MMMM Do YYYY');
    },
    'imageLink': function () {
        if(this.unsplash){
            return this.unsplash.urls.full;
        }else{
            try{
                return Images.findOne({_id: this.imgId}).link();
            }catch(e){
            }
        }
    },
    'isBlog': function () {
        return this.type === 'blog';
    }
});

Template.allPosts.helpers({
    'post': function () {
        return Posts.find({
            'author': Meteor.userId()
        });
    },
    'draftedDate': function () {
        return moment(this.draftedDate).format('MMMM Do YYYY');
    },
    'imageLink': function () {
        if(this.unsplash){
            return this.unsplash.urls.full;
        }else{
            try{
                return Images.findOne({_id: this.imgId}).link();
            }catch(e){
            }
        }
    },
    'isBlog': function () {
        return this.type === 'blog';
    },
    'stage': function () {
        return this.meta.screeningStage;
    },
    'stageCaption': function () {
        let text = 'Post Submitted';
        if(this.meta.screeningStage === 3){
            text = "Post Approved";
        }else if(this.meta.screeningStage === -1){
            text = "Post Rejected";
        }
        return text;
    },
    'isRejected': function () {
        if(this.meta.screeningStage === -1){
            return "rejected";
        }
        return "";
    },
    'rejected': function () {
        return (this.meta.screeningStage === -1);
    },
    'rejectedReason': function () {
        return "Rejected Because: \n" + this.meta.rejectedReason;
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
    'click #checkAll': function () {
        swapElements('.blog-intro', '.all-posts');
        operationStack.push('.all-posts');
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
    'input .announcement-text': function (evt) {
        let maxlength = $(evt.target).attr("maxlength");
        let length = $(evt.target).val().length;

        if (length >= maxlength) {
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
Template.announcementMenu.events({
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
    'click #video': function () {
        swapElements('.announcement-menu', '.video-announcement');
        operationStack.push('.video-announcement');
        Session.set('announcementType', 'video');
    },
});
Template.allPosts.events({
    'click .load-more-posts': function (evt) {
        evt.preventDefault();
        allPosts.loadNextPage();
    },
    'click .draft-item': function (evt) {
        if(!$(evt.target).hasClass('btn-delete-post') && !$(evt.target).hasClass('btn-republish-post') && !$(evt.target).hasClass('dropbtn')){
            let obj = $(evt.target).closest($('.draft-item'));
            let id = obj.attr('id');
            Session.set('reEdit',true);
            setEditorContentAll(Posts.findOne({_id: id}));
        }
    },
    'click .btn-delete-post': function (evt) {
        evt.preventDefault();
        let obj = $(evt.target).closest($('.draft-item'));
        let id = obj.attr('id');
        alertConfirm('Are you sure','This action cannot be reverted, if you don\'t want this post to show up in the list, we recommend you archive it.', function (accepted) {
            if(accepted){
                Meteor.call('posts.removePost', id, function (err) {
                    if(err){
                        alertError("Error Removing Post", "Please try again later.\n"+ err.message);
                    }else{
                        alertSuccess("Successfully Removed Post", "");
                    }
                });
            }
        });
    },
    'click .btn-republish-post': function (evt) {
        evt.preventDefault();
        let obj = $(evt.target).closest($('.draft-item'));
        let id = obj.attr('id');
        Modal.show('republishTime', {id: id});
    }
});
Template.republishTime.events({
    'submit #republishForm': function (evt) {
        evt.preventDefault();
        Meteor.call('posts.updatePost',this.id, {
            'meta.approved': false,
            'meta.screeningStage': 0,
            'startDate': new Date($('#republishStart').val()),
            'endDate': new Date($('#republishEnd').val()),
            'meta.rejectedReason': ""
        }, function (err) {
            if(err){
                alertError("Error occurred When Republishing Post", err.message);
            }
        });
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
                if(Session.get('draftEditItem')) {
                    Meteor.call('drafts.remove',Session.get('draftEditItem'));
                }
                Session.set('draftEditItem', null);
                wipeEditor('blog');
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
            Meteor.call('drafts.updateDraft', Session.get('draftEditItem'), json, function (err) {
                if(err){
                    alertError('Saving Draft Failed!', err.message);
                }else{
                    alertSuccess("Saved!","");
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
                let list = getKeyWord($('.editable').froalaEditor('html.get'));
                let agent = 0;
                let getImg = function(){
                    Meteor.call('searchKeyword', list[agent], function (err, data) {
                        if (err) {
                            console.log(err);
                            $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one.");
                            hasUnsplash = false;
                        } else {
                            if(data.results.length <= 0){
                                agent++;
                                if(agent <= list.length){
                                    getImg();
                                }else{
                                    $('#unsplashPrompt').html("<i class='fa fa-spinner fa-pulse fa-fw'></i> Please Wait...");
                                    Meteor.call('getRandomPhoto', function (err, data) {
                                        if (err) {
                                            console.log(err);
                                            $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one instead.");
                                            hasUnsplash = false;
                                        } else {
                                            Session.set('unsplash_img', data.id);
                                            Session.set('unsplashData',data);
                                            blogDrop.disable();
                                            $('#dropzone').fadeOut('fast');
                                            $('#dropzone').after("<img src='" + data.urls.regular + "' class='img-responsive unsplash-container' id='unsplashPreview'/>");
                                            $("#unsplashPreview").hide().fadeIn('slow');
                                            $('#unsplashPrompt').html("Here you go! This image is by <a href='"+ data.user.links.html +"?utm_source=uhs.life&utm_medium=referral&utm_campaign=api-credit'>"+ data.user.name +"</a> from "+ data.user.location +" via <b>Unsplash</b>. <br><br> Want a differnt one? <a href='' id='newUnsplash'>Click Here</a>. Changed your mind? click here to <a href='' id='newUpload'>upload a new image</a>");
                                        }
                                    });
                                }
                            }else{
                                let num = getRandomInt(0, data.results.length-1);
                                Session.set('unsplash_img', data.results[num].id);
                                Session.set('unsplashData',data.results[num]);
                                hasUnsplash = true;
                                $('#dropzone').fadeOut('fast');
                                $('#dropzone').after("<img src='" + data.results[num].urls.regular + "' class='img-responsive unsplash-container' id='unsplashPreview'/>");
                                $("#unsplashPreview").hide().fadeIn('slow');
                                $('#unsplashPrompt').html("Here you go! This image is by <a href='"+ data.results[num].user.links.html +"?utm_source=uhs.life&utm_medium=referral&utm_campaign=api-credit'>"+ data.results[num].user.name +"</a> from "+ data.results[num].user.location +" via <b>Unsplash</b>. <br><br> This will be your featured image, if you want another one <a href='' id='newUnsplash'>Click Here</a> Changed your mind? click here to <a href='' id='newUpload'>upload a new image</a>");
                            }

                        }
                    });
                };
                getImg();
            }
        });
    },
    'click #newUnsplash': function () {
        $('#unsplashPrompt').html("<i class='fa fa-spinner fa-pulse fa-fw'></i> Please Wait...");
        Meteor.call('getRandomPhoto', function (err, data) {
            if (err) {
                console.log(err);
                $('.unsplash-container').replaceWith("<form action='/file-upload' class='dropzone' id='dropzone'></form>");
                blogDrop.enable();
                $('#dropzone').fadeIn('fast');
                $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one instead.");
                hasUnsplash = false;
            } else {
                Session.set('unsplash_img', data.id);
                Session.set('unsplashData',data);
                // Adding Preview
                $('#unsplashPreview').fadeOut('fast');
                $('#unsplashPreview').replaceWith("<img src='" + data.urls.regular + "' class='img-responsive unsplash-container' id='unsplashPreview'/>");
                $("#unsplashPreview").fadeIn('slow');
                $('#unsplashPrompt').html("Here you go! This image is by <a href='"+ data.user.links.html +"?utm_source=uhs.life&utm_medium=referral&utm_campaign=api-credit'>"+ data.user.name +"</a> from "+ data.user.location +" via <b>Unsplash</b>. <br><br> Want a differnt one? <a href='' id='newUnsplash'>Click Here</a>. Changed your mind? click here to <a href='' id='newUpload'>upload a new image</a>");
            }
        });
    },
    'click #newUpload': function () {
        $('.unsplash-container').remove();
        blogDrop.enable();
        $('#dropzone').fadeIn('fast');
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
                    if (Session.get('draftEditItem')) {
                        Meteor.call('drafts.remove',Session.get('draftEditItem'));
                    }
                    Session.set('draftEditItem', null);
                    wipeEditor('announcement','imageOnly');
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
                    if (Session.get('draftEditItem')) {
                        Meteor.call('drafts.remove',Session.get('draftEditItem'));
                    }
                    Session.set('draftEditItem', null);
                    wipeEditor('announcement','textOnly');
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
                    if (Session.get('draftEditItem')) {
                        Meteor.call('drafts.remove',Session.get('draftEditItem'));
                    }
                    Session.set('draftEditItem', null);
                    wipeEditor('announcement','imageText');
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
        } else if (type === 'video') {
            console.log(json);
            Meteor.call('posts.submit', json, function (err) {
                if (err) {
                    alertError('Post Failed!', err.message);
                } else {
                    alertSuccess('Success!', 'The post has been submitted.');
                    if (Session.get('draftEditItem')) {
                        Meteor.call('drafts.remove',Session.get('draftEditItem'));
                    }
                    Session.set('draftEditItem', null);
                    wipeEditor('announcement','video');
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
            Meteor.call('drafts.updateDraft', Session.get('draftEditItem'), json, function (err) {
                if(err){
                    alertError('Failed to save draft', err.message);
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
                        wipeEditor('announcement','imageOnly');
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
                        wipeEditor('announcement','textOnly');
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
                        wipeEditor('announcement','imageText');
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
        evt.preventDefault();
        let obj = $(evt.target).closest($('.draft-item'));
        let id = obj.attr('id');
        Meteor.call('drafts.remove', id, function (err) {
            if(err){
                alertError("Something went wrong when deleting the draft", err.message);
            }
        });
    },
    'click .btn-post-draft': function (evt) {
        evt.preventDefault();
        let obj = $(evt.target).closest($('.draft-item'));
        let id = obj.attr('id');
        const json = Drafts.findOne({_id: id});
        let type = json.type;
        if (type === "imageOnly") {
            Meteor.call('posts.postImage', json, function (err) {
                if (err) {
                    alertError('Posting Failed!', err.message);
                } else {
                    alertSuccess('Success!', 'The post has been submitted.');
                    Meteor.call('drafts.remove', id);
                }
            });

        } else if (type === "textOnly") {
            Meteor.call('posts.postText', json, function (err) {
                if (err) {
                    alertError('Post Failed!', err.message);
                } else {
                    alertSuccess('Success!', 'The post has been submitted.');
                    Meteor.call('drafts.remove', id);
                }
            });
        } else if (type === 'textAndImage') {
            Meteor.call('posts.postTextImage', json, function (err) {
                if (err) {
                    alertError('Post Failed!', err.message);
                } else {
                    alertSuccess('Success!', 'The post has been submitted.');
                    Meteor.call('drafts.remove', id);
                }
            });
        } else if (type === 'blog'){
            Meteor.call('posts.postBlog', json, function (err) {
                if (err) {
                    alertError('Post Failed!', err.message);
                } else {
                    alertSuccess('Success!', 'The post has been submitted.');
                    Meteor.call('drafts.remove', id);
                }
            });
        }
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
                    Meteor.call('drafts.remove', id);
                }
            });
        }else{
            if (type === "imageOnly") {
                Meteor.call('posts.postImage', json, function (err) {
                    if (err) {
                        alertError('Posting Failed!', err.message);
                    } else {
                        alertSuccess('Success!', 'The post has been submitted.');
                        Meteor.call('drafts.remove', id);
                    }
                });

            } else if (type === "textOnly") {
                Meteor.call('posts.postText', json, function (err) {
                    if (err) {
                        alertError('Post Failed!', err.message);
                    } else {
                        alertSuccess('Success!', 'The post has been submitted.');
                        Meteor.call('drafts.remove', id);
                    }
                });
            } else if (type === 'textAndImage') {
                Meteor.call('posts.postTextImage', json, function (err) {
                    if (err) {
                        alertError('Post Failed!', err.message);
                    } else {
                        alertSuccess('Success!', 'The post has been submitted.');
                        Meteor.call('drafts.remove', id);
                    }
                });
            }
        }
    },
    'click .draft-item': function (evt) {
        if(!$(evt.target).hasClass('btn-delete-draft') && !$(evt.target).hasClass('btn-publish-draft') && !$(evt.target).hasClass('dropbtn')){
            let obj = $(evt.target).closest($('.draft-item'));
            let id = obj.attr('id');
            Session.set('draftEditItem', id);
            setEditorContent(Drafts.findOne({_id: id}));
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
            console.log('No content entered');
        }

        let json = {
            author: authorId,
            type: 'suggestion',
            headline: headline,
            content: content,
            draftedDate: draftedDate,
            imgId: imgId
        };

        Meteor.call('suggestions.postSuggestion', json, function (err) {
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