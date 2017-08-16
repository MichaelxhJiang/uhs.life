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
        },
        callback: function(){
            console.log("test");
        }
    });
}

alertSuccess = function (title, body) {
    console.log('test2');
    bootbox.alert({
        title: "<i class='fa fa-5x fa-check-circle-o'></i>",
        message: "<h3>"+title+"</h3><p>"+ body +"</p>",
        buttons: {
            ok:{
                label:"Got it",
                className: 'btn-confirm'
            }
        },
        callback: function(){
            console.log('success alert happend')
        }
    });
    $(".modal-header").css('background','#4caf50');
    $(".btn-confirm").css('background','#4caf50');
}