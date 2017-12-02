/**
 * Created by Yonglin Wang on 12/1/2017.
 *
 * This file contains all the methods used in uhs.life editor
 */
initDropZone = function (id, info) {
    return new Dropzone("form#" + id, {
        maxFiles: info.number || 1,
        maxFilesize: info.size || 8,
        thumbnailWidth: 400,
        addRemoveLinks: true,
        dictDefaultMessage: info.message || "Drop your image here, or click to select an image using the browser.",
        accept: function (file, done) {
            $('.quick-image-prompt').html('');
            const uploader = Images.insert({
                file: file,
                streams: 'dynamic',
                chunkSize: 'dynamic'
            }, false);

            uploader.on('end', function (error, fileObj) {
                if (error) {
                    alert('Error during upload: ' + error);
                } else {
                    hasUnsplash = false;
                    Session.set('newImageId', fileObj._id); //update the image id to current image
                    done();
                }
            });
            uploader.on('error', function (error, fileObj) {
                alert('Error during upload: ' + error);
            });
            uploader.start();
        }
    });
};
swapElements = function (a, b) {
    $(a).fadeOut('fast', function () {
        $(b).fadeIn("slow");
    });
};
getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
setEditorContent = function (json) {
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
                    });
                }
            });
        }
        swapElements('.blog-drafts', '.blog-editor');
        operationStack.push('.blog-editor');
        Session.set('announcementType', 'blog');
    }else if(json.type === 'announcement'){
        if(json.subType === 'imageOnly'){
            $('#imageOnlyHeadline').val(json.headline);
            if(json.imgId){
                Session.set('newImageId', json.imgId);
                $('.quick-image-prompt').html('You have already uploaded an image, if you would like to change it, simply add a different one. Otherwise, simply ignore the box.');
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
                $('.quick-image-prompt').html('You have already uploaded an image, if you would like to change it, simply add a different one. Otherwise, simply ignore the box.');
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
};
setEditorContentAll = function (json) {
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
                    });
                }
            });
        }
        swapElements('.all-posts', '.blog-editor');
        operationStack.push('.blog-editor');
        Session.set('announcementType', 'blog');
    }else if(json.type === 'announcement'){
        if(json.subType === 'imageOnly'){
            $('#imageOnlyHeadline').val(json.headline);
            if(json.imgId){
                Session.set('newImageId', json.imgId);
                $('.quick-image-prompt').html('You have already uploaded an image, if you would like to change it, simply add a different one. Otherwise, simply ignore the box.');
            }
            _.forEach(json.tags,function (item) {
                $('.announce-tags:eq(0)').tagsinput('add', item);
            });
            $(".announcement-category:eq(0)").val(json.categories).trigger("change");
            $(".clubs-category:eq(0)").val(json.clubs).trigger("change");
            swapElements('.all-posts', '.image-only');
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
            swapElements('.all-posts', '.text-only');
            operationStack.push('.text-only');
            Session.set('announcementType', 'textOnly');
        }else if(json.subType === 'imageText'){
            $('#textImageHeadline').val(json.headline);
            if(json.imgId){
                Session.set('newImageId', json.imgId);
                $('.quick-image-prompt').html('You have already uploaded an image, if you would like to change it, simply add a different one. Otherwise, simply ignore the box.');
            }
            $('.announcement-text:eq(1)').val(json.content);
            $(".announcement-category:eq(2)").val(json.categories).trigger("change");
            $(".clubs-category:eq(2)").val(json.clubs).trigger("change");
            Session.set('priority', json.meta.priority);
            $('.is-checked').removeClass('is-checked');
            $(".priority-toggle[data-priority="+ Session.get('priority') +"]").addClass('is-checked');
            swapElements('.all-posts', '.text-and-image');
            operationStack.push('.text-and-image');
            Session.set('announcementType', 'textAndImage');
        }
    }
};
wipeEditor = function(type, subType) {
    if(type === 'blog'){
        $('#blogTitle').val(null);
        $('#blogSubTitle').val(null);
        $('.editable').froalaEditor('html.set', '');
        $('.tags').tagsinput('removeAll');
        $('.visibility-select').val(null).trigger("change");
        $(".category-select").val(null).trigger("change");
        $('.input-date').datepicker('update', null);
        Session.set('unsplash_img', null);
        Session.set('unsplashData', null);
        Session.set('newImageId', null);
        blogDrop.enable();
        blogDrop.removeAllFiles();
        $('#dropzone').show();
        $('.unsplash-container').remove();
        $('#unsplashPrompt').html("Want to avoid the hassle? <a href='' id='getFeaturedUnsplash'>Click here</a> and we will find an image for you!");
    }else if(type === 'announcement'){
        if(subType === 'imageOnly'){
            $('#imageOnlyHeadline').val(null);
            Session.set('newImageId', null);
            $('#announcementImage').replaceWith("<form action='/file-upload' class='dropzone' id='announcementImage'></form>");
            let announcementDrop = initDropZone("announcementImage", {
                number: 1,
                size: 8,
                message: "Drop your poster here, or click to select an image using the browser.",
            });
            $('.quick-image-prompt').html("");
            $('.announce-tags:eq(0)').tagsinput('removeAll');
            $(".announcement-category:eq(0)").val(null).trigger("change");
            $(".clubs-category:eq(0)").val(null).trigger("change");
            $('.startDate:eq(0)').datepicker('update',null);
            $('.endDate:eq(0)').datepicker('update',null);
        }else if(subType === 'textOnly'){
            $('#textOnlyHeadline').val(null);
            $('.announcement-text:eq(0)').val(null);
            $('.announce-tags:eq(1)').tagsinput('removeAll');
            $(".announcement-category:eq(1)").val(null).trigger("change");
            $(".clubs-category:eq(1)").val(null).trigger("change");
            $('.startDate:eq(1)').datepicker('update',null);
            $('.endDate:eq(1)').datepicker('update',null);
        }else if(subType === 'imageText'){
            $('#textImageHeadline').val(null);
            Session.set('newImageId', null);
            $('#announcementImageTwo').replaceWith("<form action='/file-upload' class='dropzone' id='announcementImageTwo'></form>");
            let announcementDrop = initDropZone("announcementImageTwo", {
                number: 1,
                size: 8,
                message: "Drop your poster here, or click to select an image using the browser.",
            });
            $('.quick-image-prompt').html('');
            $('.announcement-text:eq(1)').val(null);
            $('.announce-tags:eq(2)').tagsinput('removeAll');
            $(".announcement-category:eq(2)").val(null).trigger("change");
            $(".clubs-category:eq(2)").val(null).trigger("change");
            $('.startDate:eq(2)').datepicker('update',null);
            $('.endDate:eq(2)').datepicker('update',null);
            Session.set('priority', 'image');
            $('.is-checked').removeClass('is-checked');
            $(".priority-toggle[data-priority="+ Session.get('priority') +"]").addClass('is-checked');
        }
    }
};
constructBlogJson = function(){
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
};
constructAnnouncementJson = function(type){
    if (type === "imageOnly") {
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
            alertError('Post Incomplete!', "You haven't uploaded an image yet!");
        }
        if (!headline) {
            //TODO
            alertError('Post Incomplete!', "You haven't added a headline!");
        }
        if(!startDate || !endDate){
            alertError('Post Incomplete!', "You haven't added a date!");
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
            alertError('Post Incomplete!', "You haven't added any content yet!");
        }
        if (!headline) {
            //TODO
            alertError('Post Incomplete!', "You haven't added a headline!");
        }
        if(!startDate || !endDate){
            alertError('Post Incomplete!', "You haven't added a date!");
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
            alertError('Post Incomplete!', "You haven't uploaded an image yet!");
        }
        if (!headline) {
            //TODO
            alertError('Post Incomplete!', "You haven't added a headline!");
        }
        if(!startDate || !endDate){
            alertError('Post Incomplete!', "You haven't added a date!");
        }
        if (!content) {
            //TODO
            alertError('Post Incomplete!', "You haven't added any information!");
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
};
getKeyWord = function(text) {
    let keyword_extractor = require("keyword-extractor");

    let keywords = ($(text).text());
//  Extract the keywords
    return keyword_extractor.extract(keywords, {
        language: "english",
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: false,
        remove_max_ngrams: 10
    });
};
youtubeParser = function(url){
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    if (match && match[2].length === 11) {
        return match[2];
    } else {
        throw Error('This is not a YouTube Link');
    }
};