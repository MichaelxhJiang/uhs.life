//This file provides a library of dialogs that are used in uhs.life

alertError = function (title, body) {
    bootbox.alert({
        title: "<i class='fa fa-5x fa-times-circle-o'></i>",
        message: "<h3>"+title+"</h3><p>"+ body +"</p>",
        buttons: {
            ok:{
                label:"Got it",
                className: 'btn-confirm'
            }
        }
    });
};

alertSuccess = function (title, body) {
    bootbox.alert({
        title: "<i class='fa fa-5x fa-check-circle-o'></i>",
        message: "<h3>"+title+"</h3><p>"+ body +"</p>",
        buttons: {
            ok:{
                label:"Got it",
                className: 'btn-confirm'
            }
        }
    });
    $(".modal-header").css('background','#4caf50');
    $(".btn-confirm").css('background','#4caf50');
};

alertConfirm = function (title, body, callback) {
    bootbox.confirm({
        title: "<i class='fa fa-5x fa-question-circle-o'></i>",
        message: "<h3>"+title+"</h3><p>"+ body +"</p>",
        buttons: {
            confirm: {
                label: 'Yes I am Sure',
                className: 'btn-success'
            },
            cancel: {
                label: 'No, I am Not',
                className: 'btn-grey'
            }
        },
        callback: function (result) {
            callback(result);
        }
    });
    $(".modal-header").css('background','#2196F3');
};

alertPrompt = function (title, callback) {
    bootbox.prompt({
        title: title,
        inputType: 'textarea',
        callback: function (result) {
            callback(result)
        }
    });
};