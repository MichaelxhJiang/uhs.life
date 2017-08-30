import { FlowRouter } from 'meteor/kadira:flow-router';

import './marksDetail.html';

Template.marksDetail.onRendered(function() {
    document.getElementById("marks").checked = true;
    var markSwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
    });
});