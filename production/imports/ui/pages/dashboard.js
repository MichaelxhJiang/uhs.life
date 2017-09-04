/**
 * Created by Yonglin Wang on 8/22/2017.
 */
import './dashboard.html'

Template.dashboard.events({
    'click .new-post': function () {
        Modal.show('dashPostEditor');
    }
});

Template.dashPostEditor.onRendered(function () {
    this.$(".announce-tags").tagsinput('items');
    $(document).ready(function () {
        $('.category-select').select2({
            placeholder: "Click to select matching categories",
            allowClear: true
        });
        $('.input-daterange').datepicker({
            startDate: '+0d'
        });
    });
});

Template.dashPostEditor.events({
    'input .announcement-text': function (evt) {
        let maxlength = $(evt.target).attr("maxlength");
        let length = $(evt.target).val().length;

        if( length >= maxlength ){
            console.log("You have reached the maximum number of characters.");
            $('.announcement-counter').text(0);
        }else{
            $('.announcement-counter').text(maxlength - length);
        }
    }
});