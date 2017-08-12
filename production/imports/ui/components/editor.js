/**
 * Created by Yonglin Wang on 8/4/2017.
 */

import { Images } from '../../api/media/images.js';
import './editor.html';
var current;

Template.editor.onRendered(function (){

    if (Meteor.isClient){
        let arrayOfImageIds = [];
        Dropzone.autoDiscover = false;

        let dropzone = new Dropzone("form#dropzone", {
            maxFiles:1,
            maxFilesize: 8,
            thumbnailWidth: 400,
            dictDefaultMessage: "Drop an image here to be the featured image, or click to select an image using the browser.",
            accept: function(file, done){
                Images.insert(file, function(err, fileObj){
                    if(err){
                        alert("Error");
                    } else {
                        // gets the ID of the image that was uploaded
                        var imageId = fileObj._id;
                        done();
                        console.log(fileObj, fileObj.url());
                        // do something with this image ID, like save it somewhere
                        arrayOfImageIds.push(imageId);
                    }
                });

            }
        });
        let announcementDrop = new Dropzone("form#announcementImage", {
            maxFiles:1,
            maxFilesize: 8,
            thumbnailWidth: 400,
            dictDefaultMessage: "Drop your poster here, or click to select an image using the browser.",
            accept: function(file, done){
                Images.insert(file, function(err, fileObj){
                    if(err){
                        alert("Error");
                    } else {
                        // gets the ID of the image that was uploaded
                        var imageId = fileObj._id;
                        done();
                        console.log(fileObj, fileObj.url());
                        // do something with this image ID, like save it somewhere
                        arrayOfImageIds.push(imageId);
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
                Images.insert(file, function(err, fileObj){
                    if(err){
                        alert("Error");
                    } else {
                        // gets the ID of the image that was uploaded
                        var imageId = fileObj._id;
                        done();
                        console.log(fileObj, fileObj.url());
                        // do something with this image ID, like save it somewhere
                        arrayOfImageIds.push(imageId);
                    }
                });

            }
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
    }
});

Template.editor.events({
    'click #openEditor': function () {
        swapElements('.editor-open', '.editor-main','a');
        $('html, body').css({
            overflow: 'hidden'
        });
    },
    'click #startNewDraft': function () {
        swapElements('.blog-intro','.post-type');
    },
    'click #checkDrafts': function () {
        swapElements('.blog-intro', '.blog-drafts');
    },
    'click #startBlog': function () {
        swapElements('.post-type', '.blog-editor');
    },
    'click #startAnnouncement': function () {
        swapElements('.post-type', '.blog-announcements');
    },
    'click .editor-back': function () {
        swapElements('.editor-main', '.editor-open');
        $('html, body').css({
            overflow: 'visible'
        });
    },
    'click #imageOnly': function () {
        swapElements('.announcement-type', '.image-only');
    },
    'click #textOnly': function () {
        swapElements('.announcement-type', '.text-only');
    },
    'click #textAndImage': function () {
        swapElements('.announcement-type', '.text-and-image');
    }
});
function swapElements(a,b,check){
    $(a).fadeOut('fast', function () {
        $(b).fadeIn("slow");
    });
    current = b;
}