/**
 * Created by Yonglin Wang on 8/4/2017.
 */

import { Images } from '../../api/posts/images.js';
import { Drafts } from '../../api/posts/drafts.js';
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
                    /**
                    //retreive file extension
                    var fileUrl = '/cfs/files/images/'+file._id;
                    console.log("file.val = " + fileObj.extension());
                    Session.set('newFileType', fileObj.extension());   //update the file type
                    **/
                    Session.set('newImageId', fileObj._id); //update the image id to current image
                    console.log("new image id: " + Session.get('newImageId'));
                    console.log("new image url: " + fileObj.url());
                    done();
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
                    /**
                    //retreive file extension
                    var fileUrl = '/cfs/files/images/'+file._id;
                    console.log("file.val = " + fileObj.extension());
                    Session.set('newFileType', fileObj.extension());   //update the file type
                    **/
                    Session.set('newImageId', fileObj._id); //update the image id to current image
                    console.log("new image id: " + Session.get('newImageId'));

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
                   /**
                   //retreive file extension
                   var fileUrl = '/cfs/files/images/'+file._id;
                   console.log("file.val = " + fileObj.extension());
                   Session.set('newFileType', fileObj.extension());   //update the file type
                   **/
                   Session.set('newImageId', fileObj._id); //update the image id to current image
                   console.log("new image id: " + Session.get('newImageId'));
                   console.log("new image url: " + fileObj.url());
                   done();
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
        Session.set('announcementType', 'imageOnly');
    },
    'click #textOnly': function () {
        swapElements('.announcement-type', '.text-only');
        Session.set('announcementType', 'textOnly');
    },
    'click #textAndImage': function () {
        swapElements('.announcement-type', '.text-and-image');
        Session.set('announcementType', 'textAndImage');
    },
    'click .btn-login': function () {
      var type = Session.get('announcementType');
      console.log('submitting ' + type);
      if (type === "imageOnly") {
         //Meteor.call('postDraftImage');
      } else if (type === "textOnly") {
         //Meteor.call('postDraftText');
      } else {
         //Meteor.call('postDraftTextImage');
      }
   }
});
function swapElements(a,b,check){
    $(a).fadeOut('fast', function () {
        $(b).fadeIn("slow");
    });
    current = b;
}
