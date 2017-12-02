/**
 * Created by Yonglin Wang on 12/1/2017.
 */
import './editorLib.js';

Template.videoAnnouncement.events({
    'input #videoLink': function (evt) {
        let link = $('#videoLink').val();
        try{
            let id = youtubeParser(link);
            if(id !== Session.get('videoId')){
                $('#videoPreviewFrame').attr('src', 'https://www.youtube-nocookie.com/embed/'+ id +'?rel=0&amp;controls=0');
                Session.set('videoId',id);
            }
            $('#videoPreview').fadeIn('slow');
        }catch (err){
            console.log(err.message);
        }
    }
});