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
                    //retreive file extension
                    Session.set('newFileType', fileObj.extension());   //update the file type
                    Session.set('newImageId', fileObj._id); //update the image id to current image

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
        Session.set('announcementType', 'blog');
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
    'click .btn-login': function (event, template) {
      var type = Session.get('announcementType');

      var date = new Date();  //get current date

      console.log('submitting ' + type);
      if (type === "imageOnly") {
         var title = template.find('#imageOnlyTitle').value;
         const imgId = Session.get('newImageId');
         const fileType = Session.get('newFileType');
         var tags = [];

         //get tags form title
         Meteor.call('getTags', title, function(err, arr) {
            for (var i = 0; i < arr.length; ++i) {
               tags.push(arr[i]);
            }
            //post draft image
            Meteor.call('postDraftImage', title, imgId, fileType, tags, date);
         });
      } else if (type === "textOnly") {
         var title = template.find('#textOnlyTitle').value;
         var text = template.find('#textOnlyText').value;
         var tags = [];
         //get tags from title
         Meteor.call('getTags', title, function(err, arr) {
            for (var i = 0; i < arr.length; ++i) {
               tags.push(arr[i]);
            }
            //get tags from text
            Meteor.call('getTags', text, function(err, arr2) {
               for (var j = 0; j < arr2.length; ++j) {
                  if (tags.indexOf(arr2[i]) === -1) {
                     tags.push(arr2[i]);
                  }
               }
               //post draft
               Meteor.call('postDraftText', title, text, tags, date);
            });
         });
      } else if (type === "textAndImage"){
         const imgId = Session.get('newImageId');
         const fileType = Session.get('newFileType');
         var title = template.find('#textImageTitle').value;
         var text = template.find('#textImageText').value;
         var tags = [];
         //get tags from title
         Meteor.call('getTags', title, function(err, arr) {
            for (var i = 0; i < arr.length; ++i) {
               tags.push(arr[i]);
            }
            //get tags from text
            Meteor.call('getTags', text, function(err, arr2) {
               for (var j = 0; j < arr2.length; ++j) {
                  if (tags.indexOf(arr2[i]) === -1) {
                     tags.push(arr2[i]);
                  }
               }
               //post draft
               Meteor.call('postDraftTextImage', title, text, imgId, fileType, true, tags, date);
            });
         });
      }
      Session.set('newFileType', null);   //update the file type
      Session.set('newImageId', null); //update the image id to current image
   },
   'click .publish' : function(event, template) {
      var title = template.find('#blogTitle').value;
      var subTitle = template.find('#blogSubTitle').value;
      var content = "TODO";
      var tags = [];
      var date = new Date();
      Meteor.call('postDraftBlog', title, subTitle, null, null, content, tags, date);
   }
});
function swapElements(a,b,check){
    $(a).fadeOut('fast', function () {
        $(b).fadeIn("slow");
    });
    current = b;
}
