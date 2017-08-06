/**
 * Created by Yonglin Wang on 8/4/2017.
 */

import { Images } from '../../api/media/images.js';
import './editor.html';

Template.editor.onRendered(function (){
    if (Meteor.isClient){
        let arrayOfImageIds = [];
        Dropzone.autoDiscover = false;

        let dropzone = new Dropzone("form#dropzone", {
            maxFiles:1,
            maxFilesize: 8,
            thumbnailWidth: 400,
            dictDefaultMessage: "Drop an image here to be the header image, or click to select an image.",
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
                    };
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
        let $floaty = $('.floaty');

        $floaty.on('mouseover click', function(e) {
            $floaty.addClass('is-active');
            e.stopPropagation();
        });

        $floaty.on('mouseout', function() {
            $floaty.removeClass('is-active');
        });

        $('.container').on('click', function() {
            $floaty.removeClass('is-active');
        });
    }
});

Template.editor.events({
    'click #openEditor': function () {
        swapElements('#openEditor', '.editor-main');
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
    },
    'click #startNewDraft': function () {
        swapElements('.post-source','.post-type');
    },
    'click #checkDrafts': function () {
        swapElements('.blog-intro', '.blog-drafts')
    },
    'click #startBlog': function () {
        swapElements('.blog-intro', '.blog-editor');
    }
});
function swapElements(a,b){
    $(a).fadeOut('fast', function () {
        $(this).replaceWith($(b));
        $(b).fadeIn("slow");
    });
}