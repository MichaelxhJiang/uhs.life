/**
 * Created by Yonglin Wang on 8/4/2017.
 */

import { Images } from '../../api/posts/images.js';
import { Drafts } from '../../api/posts/drafts.js';

import './editor.html';
var current;

Template.editor.onRendered(function (){
    $(document).ready(function () {
        $('.category-select').select2({
            placeholder: "Click to select matching categories",
            allowClear: true
        });
        $('.input-daterange').datepicker({});
    });
    if (Meteor.isClient){
        let arrayOfImageIds = [];
        Dropzone.autoDiscover = false;
        $(".tags").tagsinput('items');

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
      let type = Session.get('announcementType');

      let date = new Date();  //get current date

      console.log('submitting ' + type);
      if (type === "imageOnly") {
         let title = template.find('#imageOnlyTitle').value;
         const imgId = Session.get('newImageId');
         const fileType = Session.get('newFileType');
         let tags = [];
         let categories = [];

         //get tags form title
         Meteor.call('getCategories', title, function(err, arr) {
            if (err) {
               console.log(err);
            } else {
               for (var i = 0; i < arr.length && arr.length !== 0; ++i) {
                  categories.push(arr[i]);
               }
               //post draft image
               Meteor.call('postDraftImage', title, imgId, fileType, tags, categories, date);

               //reset session vars
               Session.set('newFileType', null);   //update the file type
               Session.set('newImageId', null); //update the image id to current image
            }
         });
      } else if (type === "textOnly") {
         var title = template.find('#textOnlyTitle').value;
         var text = template.find('#textOnlyText').value;
         var tags = [];
         var categories = [];
         //get tags from title
         Meteor.call('getCategories', title, function(err, arr) {
            if (err) {
               console.log(err);
            } else {
               for (var i = 0; i < arr.length && arr.length !== 0; ++i) {
                  categories.push(arr[i]);
               }
               //get tags from text
               Meteor.call('getCategories', text, function(err, arr2) {
                  if (err) {
                     console.log(err);
                  } else {
                     for (var j = 0; j < arr2.length && arr2.length !== 0; ++j) {
                        if (categories.indexOf(arr2[j]) === -1) {
                           categories.push(arr2[j]);
                        }
                     }
                     //post draft
                     Meteor.call('postDraftText', title, text, tags, categories, date);

                     //reset session vars
                     Session.set('newFileType', null);   //update the file type
                     Session.set('newImageId', null); //update the image id to current image
                  }
               });
            }
         });
      } else if (type === "textAndImage"){
         const imgId = Session.get('newImageId');
         const fileType = Session.get('newFileType');
         var title = template.find('#textImageTitle').value;
         var text = template.find('#textImageText').value;
         var tags = [];
         var categories = [];
         //get tags from title
         Meteor.call('getCategories', title, function(err, arr) {
            if (err) {
               console.log(err);
            } else {
               for (var i = 0; i < arr.length && arr.length !== 0; ++i) {
                  categories.push(arr[i]);
               }
               //get tags from text
               Meteor.call('getCategories', text, function(err, arr2) {
                  if (err) {
                     console.log(err);
                  } else {
                     for (var j = 0; j < arr2.length && arr2.length !== 0; ++j) {
                        if (categories.indexOf(arr2[j]) === -1) {
                           categories.push(arr2[j]);
                        }
                     }
                     //post draft
                     Meteor.call('postDraftTextImage', title, text, imgId, fileType, true, tags, categories, date);

                     //reset session vars
                     Session.set('newFileType', null);   //update the file type
                     Session.set('newImageId', null); //update the image id to current image
                  }
               });
            }
         });
      }
   },
   'click .publish' : function(event, template) {
      var title = template.find('#blogTitle').value;
      var subTitle = template.find('#blogSubTitle').value;
      var content = "TODO";
      const imgId = Session.get('newImageId');
      const fileType = Session.get('newFileType');
      //get tags
      var str = template.find('#blogTags').value;
      var separators = [' , ', ', ', ',', ' ,'];
      var tags = str.split(new RegExp(separators.join('|'), 'g'));

      var categories = [];
      var date = new Date();


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

      //Meteor.call('postDraftBlog', title, subTitle, imgId, fileType, content, tags, date);
   },
    'click #getFeaturedUnsplash': function (evt, template) {
        $('#unsplashPrompt').html("Please Wait...");
        Meteor.call('setupUnsplash', function (err) {
            if(err){
                console.log(err);
            }else{
                Meteor.call('searchKeyword', "nature",function (err,data) {
                    if(err){
                        console.log(err);
                    }else{
                        console.log(data);
                        $('#dropzone').replaceWith("<img src='"+data.results[0].urls.regular+"' class='img-responsive'/>");
                        $('#unsplashPrompt').html("Here you go! This will be your featured image");
                    }
                })
            }
        })
    }
});
function swapElements(a,b,check){
    $(a).fadeOut('fast', function () {
        $(b).fadeIn("slow");
    });
    current = b;
}
