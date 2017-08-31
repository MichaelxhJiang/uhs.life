/**
 * Created by Yonglin Wang on 8/4/2017.
 */

import { Images } from '../../api/images/images.js';
import { Drafts } from '../../api/drafts/drafts.js';

import './editor.html';
var operationStack = ['.editor-open'];
let hasUnsplash = false;
Template.editor.onRendered(function (){
    $(document).ready(function () {
        $('.category-select').select2({
            placeholder: "Click to select matching categories",
            allowClear: true
        });
        $('.visibility-select').select2({
            placeholder: "Click to select the scope of this post",
        });
        $('.input-daterange').datepicker({});
        $('.input-date').datepicker({});
    });
    $('.editable').froalaEditor({
        scaytAutoload: false,
        //This setting can be completely ignored.
        scaytOptions: {
            enableOnTouchDevices: false,
            localization:'en',
            extraModules: 'ui',
            DefaultSelection: 'American English',
            spellcheckLang: 'en_US',
            contextMenuSections: 'suggest|moresuggest',
            serviceProtocol: 'https',
            servicePort:'80',
            serviceHost:'svc.webspellchecker.net',
            servicePath:'spellcheck/script/ssrv.cgi',
            contextMenuForMisspelledOnly: true,
            scriptPath: 'https://demo.webspellchecker.net/froala/customscayt.js'
        },
        //ignore end
        toolbarButtons: ['fullscreen','|', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertFile', 'insertVideo', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'help', '|', 'undo', 'redo'],
        toolbarButtonsSM: ['fullscreen', '|', 'bold', 'italic', 'underline', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertFile', 'insertVideo', 'insertTable', '|',  'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'help', '|', 'undo', 'redo'],
        placeholderText: 'Tell your story here...',
    });
    if (Meteor.isClient){
        let arrayOfImageIds = [];
        Dropzone.autoDiscover = false;
        $(".tags").tagsinput('items');
        let blogDrop = initDropZone('dropzone',{
            number:1,
            size: 8,
            message: "Drop an image here to be the featured image, or click to select an image using the browser.",
        });
        let suggestionDrop = initDropZone('suggestionImage',{
            number:1,
            size: 8
        });
        let announcementDrop = new Dropzone("form#announcementImage", {
            maxFiles:1,
            maxFilesize: 8,
            thumbnailWidth: 400,
            dictDefaultMessage: "Drop your poster here, or click to select an image using the browser.",
            accept: function(file, done){
                var FSFile = new FS.File(file);
                //console.log(FSFile);
                Images.insert(FSFile, function (err, fileObj) {
                    if (err){
                        console.log(err);
                    } else {
                        console.log("New image got uploaded");
                        //remove the currently uploaded image
                        //if there is none, this will not do anything
                        Images.remove({_id:Session.get('newImageId')}, function(err) {
                            if(err) {
                                console.log("error removing image:\n" + err);
                            }
                        });
                        //retreive file extension
                        Session.set('newFileType', fileObj.extension());   //update the file type
                        Session.set('newImageId', fileObj._id); //update the image id to current image

                        done();
                    }
                });

            }
        });
        let announcementImageTwo = new Dropzone("#announcementImageTwo", {
            maxFiles:1,
            maxFilesize: 8,
            thumbnailWidth: 400,
            dictDefaultMessage: "Drop your poster here, or click to select an image using the browser.",
            accept: function(file, done){
                var FSFile = new FS.File(file);
                //console.log(FSFile);
                Images.insert(FSFile, function (err, fileObj) {
                    if (err){
                        console.log(err);
                    } else {
                        console.log("New image got uploaded");
                        //remove the currently uploaded image
                        //if there is none, this will not do anything
                        Images.remove({_id:Session.get('newImageId')}, function(err) {
                            if(err) {
                                console.log("error removing image:\n" + err);
                            }
                        });
                        //retreive file extension
                        Session.set('newFileType', fileObj.extension());   //update the file type
                        Session.set('newImageId', fileObj._id); //update the image id to current image
                        done();
                    }
                });

            }
        });
    }
});
Template.announcementOptions.onRendered(function () {
    this.$(".announce-tags").tagsinput('items');
});


/* Events */
Template.editor.events({
    'click #openEditor': function () {
        swapElements('.editor-open', '.editor-main');
        if(operationStack.length === 1){
            operationStack.push('.blog-intro');
        }
        $('html, body').css({
            overflow: 'hidden'
        }); // Disables the Scrolling
    },
    'click #startNewDraft': function () {
        swapElements('.blog-intro','.post-type');
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
        swapElements('.post-type', '.blog-announcements');
        operationStack.push('.announcement-type');
    },
    'click #startSuggestion': function () {
        swapElements('.post-type', '.suggestions');
        operationStack.push('.suggestions');
    },
    'click .editor-close': function () {
        swapElements('.editor-main', '.editor-open');
        $('html, body').css({
            overflow: 'visible'
        }); // Disables the Scrolling
    },
    'click .editor-back': function () {
        if(operationStack.length-2 === 0){
            swapElements('.editor-main','.editor-open');
            $('html, body').css({
                overflow: 'visible'
            }); // Enables the Scrolling
        }else{
            swapElements(operationStack[operationStack.length-1],operationStack[operationStack.length-2]);
        }
        operationStack.pop();
    },
    'click #imageOnly': function () {
        swapElements('.announcement-type', '.image-only');
        operationStack.push('.image-only');
        Session.set('announcementType', 'imageOnly');
    },
    'click #textOnly': function () {
        swapElements('.announcement-type', '.text-only');
        operationStack.push('.text-only');
        Session.set('announcementType', 'textOnly');
    },
    'click #textAndImage': function () {
        swapElements('.announcement-type', '.text-and-image');
        operationStack.push('.text-and-image');
        Session.set('announcementType', 'textAndImage');
    },
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
    'click .publish' : function(event, template) {
        let title = $('#blogTitle').val() + " (This is a preview)";
        let subtitle = $('#blogSubTitle').val();
        let content = $('.editable').froalaEditor('html.get');
        let str = $(".tags").val();
        let separators = [' , ', ', ', ',', ' ,'];
        let tags = str.split(new RegExp(separators.join('|'), 'g'));
        let imgId = (hasUnsplash) ? Session.get('unsplash_img') : Session.get('newImageId');
        let releaseDate = $('.input-date').val();
        let draftedDate = new Date();
        let categories = $('.category-select').val();
        let editable = null;
        let authorId = Meteor.userId();

        /*TEMP
        console.log(title);
        console.log(subtitle);
        console.log(content);
        console.log(tags);
        console.log(categories);
        console.log(releaseDate);
        console.log(draftedDate);
        console.log(authorId);*/

        //meta
        let visibility = $('visibility-select').val();

        let json = {
            type: 'announcement',
            subType: 'imageOnly',
            releaseDate: releaseDate,
            draftedDate: draftedDate,
            editable: editable,
            title: title,
            subtitle: subtitle,
            content: content,
            tags: tags,
            categories: categories,
            imgId: imgId,
            meta: {
                imageFirst: imageFirst,
                hasUnsplash: hasUnsplash,
                visibility: visibility
            }
        }
        /**
        //find all categories that post belongs to
        Meteor.call('getCategories', title, function(err, arr) { //search title
            if (err) {
                console.log(err);
            } else {
                console.log('arr: ' + arr);
                for (var i = 0; i < arr.length && arr.length != 0; ++i) {
                    categories.push(arr[i]);
                }
                //get tags from text
                Meteor.call('getCategories', subTitle, function(err, arr2) {   //search subtitle
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('arr2: ' + arr2);
                        for (var j = 0; j < arr2.length && arr2.length != 0; ++j) {
                            if (categories.indexOf(arr2[j]) === -1) {
                                categories.push(arr2[j]);
                            }
                        }

                        Meteor.call('getCategories', content, function(err, arr3) { //search content
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('arr3: ' + arr3);
                                for (var k = 0; k < arr3.length && arr3.length != 0; ++k) {
                                    if (categories.indexOf(arr3[k]) === -1) {
                                        categories.push(arr3[k]);
                                    }
                                }
                                //post draft
                                Meteor.call('postDraftBlog', title, subTitle, imgId, fileType, content, tags, categories, date);
                                //reset sessions vars
                                Session.set('newFileType', null);   //update the file type
                                Session.set('newImageId', null); //update the image id to current image
                            }
                        });
                    }
                });
            }
        });
        **/
    },
    'click #getFeaturedUnsplash': function (evt, template) {
        $('#unsplashPrompt').html("<i class='fa fa-spinner fa-pulse fa-fw'></i> Please Wait...");
        Meteor.call('setupUnsplash', function (err) {
            if(err){
                console.log(err);
            }else{
                Meteor.call('searchKeyword', "nature",function (err,data) {
                    if(err){
                        console.log(err);
                        $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one.");
                    }else{
                        console.log(data);
                        let num = getRandomInt(0,9);
                        Session.set('unsplash_img', data.results[num].id);
                        hasUnsplash = true;
                        $('#dropzone').replaceWith("<img src='"+data.results[num].urls.regular+"' class='img-responsive unsplash-container'/>");
                        $('#unsplashPrompt').html("Here you go! This will be your featured image, if you want another one <a href='' id='newUnsplash'>Click Here</a>");
                    }
                })
            }
        })
    },
    'click #newUnsplash': function () {
        $('#unsplashPrompt').html("<i class='fa fa-spinner fa-pulse fa-fw'></i> Please Wait...");
        Meteor.call('getRandomPhoto',function (err,data) {
            if(err){
                console.log(err);
                $('.unsplash-container').replaceWith("<form action='/file-upload' class='dropzone' id='dropzone'></form>");
                $('#unsplashPrompt').html("Sorry... We failed to find an image for you. Please upload one instead.");
            }else{
                console.log(data);
                Session.set('unsplash_img', data.id);
                $('.unsplash-container').replaceWith("<img src='"+data.urls.regular+"' class='img-responsive unsplash-container'/>");
                $('#unsplashPrompt').html("Here you go! Want a differnt one? <a href='' id='newUnsplash'>Click Here</a>. Changed your mind? click here to upload a new image");
            }
        })
    },
    'click .btn-preview': function () {
        let imageID = (hasUnsplash) ? Session.get('unsplash_img') : Session.get('newImageId');
        let previewPost = {
            title: $('#blogTitle').val() + " (This is a preview)",
            subtitle: $('#blogSubTitle').val(),
            content: $('.editable').froalaEditor('html.get'),
            tags: $(".tags").val(),
            featured: imageID,
            hasUnsplash: hasUnsplash
        };
        console.log(imageID);
        Session.setPersistent('preview_json', previewPost);
        $('html, body').css({
            overflow: 'visible'
        }); // Disables the Scrolling
        window.open('/blog/preview', '_blank');
    }
});
Template.announcementOptions.events({
    'click .btn-post': function (event, template) {
        let type = Session.get('announcementType');
        console.log('submitting ' + type);
        if (type === "imageOnly") {
            let headline = $('#imageOnlyHeadline').val();
            let imgId = Session.get('newImageId');
            let str = $(".announce-tags")[0].value();
            let separators = [' , ', ', ', ',', ' ,'];
            let tags = str.split(new RegExp(separators.join('|'), 'g'));

            console.log(tags);

            let dateRange = null,
                draftedDate = new Date(),
                categories = null,
                editable = null;
                authorId = Meteor.userId();
            console.log(authorId);

            //meta
            let imageFirst = null,
                hasUnsplash = null;

            if (!imgId) {
                alertError('Post Incomplete!', "You haven't uploaded an image yet!")
            }
            if (!headline) {
                //TODO
                alertError('Post Incomplete!', "You haven't added a headline!")
            }

            let json = {
                type: 'announcement',
                subType: 'imageOnly',
                dateRange: dateRange,
                draftedDate: draftedDate,
                editable: editable,
                content: null,
                tags: tags,
                categories: categories,
                imgId: imgId,
                meta: {
                    imageFirst: imageFirst,
                    hasUnsplash: hasUnsplash,
                }
            }

            //Meteor.call('postImage', json);
        } else if (type === "textOnly") {
            let headline = $('#textOnlyHeadline').value;
            console.log(headline);
            let content = $('#textContent').value;
            console.log(content);
            let str = $(".announce-tags")[1].value();
            let separators = [' , ', ', ', ',', ' ,'];
            let tags = str.split(new RegExp(separators.join('|'), 'g'));
            console.log(tags);
            let dateRange = null;
            let draftedDate = new Date();
            let categories = null;
            let editable = null;
            let authorId = Meteor.userId();
            console.log(authorId);

            //meta
            let imageFirst = null;
            let hasUnsplash = null;

            if (!headline) {
                //TODO
                console.log('No headline entered');
            }

            let json = {
                type: 'announcement',
                subType: 'textOnly',
                dateRange: dateRange,
                draftedDate: draftedDate,
                editable: editable,
                content: content,
                tags: tags,
                categories: categories,
                imgId: null,
                meta: {
                    imageFirst: imageFirst,
                    hasUnsplash: hasUnsplash,
                }
            }

            //Meteor.call('postText', json);
        } else {
            let headline = $('#imageOnlyHeadline').value;
            let content = $('#textContent').value;
            let imgId = Session.get('newImageId');
            let str = $(".announce-tags")[2].value();
            let separators = [' , ', ', ', ',', ' ,'];
            let tags = str.split(new RegExp(separators.join('|'), 'g'));
            console.log(tags);
            let dateRange = null;
            let draftedDate = new Date();
            let categories = null;
            let editable = null;
            let authorId = Meteor.userId();
            console.log(authorId);

            //meta
            let imageFirst = null;
            let hasUnsplash = null;

            if (!imgId) {
                //TODO
                console.log('No image uploaded');
            }
            if (!headline) {
                //TODO
                console.log('No headline entered');
            }

            let json = {
                type: 'announcement',
                subType: 'imageOnly',
                dateRange: dateRange,
                draftedDate: draftedDate,
                editable: editable,
                content: content,
                tags: tags,
                categories: categories,
                imgId: imgId,
                meta: {
                    imageFirst: imageFirst,
                    hasUnsplash: hasUnsplash,
                }
            }

            //Meteor.call('postImageText', json);
        }
    }
});
function initDropZone(id, info){
    return new Dropzone("form#"+id, {
        maxFiles:info.number || 1,
        maxFilesize: info.size || 8,
        thumbnailWidth: 400,
        dictDefaultMessage: info.message || "Drop your image here, or click to select an image using the browser.",
        accept: function(file, done){
            let FSFile = new FS.File(file);
            //console.log(FSFile);
            Images.insert(FSFile, function (err, fileObj) {
                if (err){
                    console.log(err);
                } else {
                    //remove the currently uploaded image
                    //if there is none, this will not do anything
                    Images.remove({_id:Session.get('newImageId')}, function(err) {
                        if(err) {
                            console.log("error removing image:\n" + err);
                        }
                    });
                    console.log(fileObj);
                    //retreive file extension
                    hasUnsplash = false;
                    Session.set('newFileType', fileObj.extension());   //update the file type
                    Session.set('newImageId', fileObj._id); //update the image id to current image
                    done();
                }
            });
        }
    });
}
function swapElements(a,b){
    $(a).fadeOut('fast', function () {
        $(b).fadeIn("slow");
    });
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
