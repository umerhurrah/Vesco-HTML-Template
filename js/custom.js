// SERVICES
$(function () {
    //animate on scroll
    new WOW().init();
});

//WORK
$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
