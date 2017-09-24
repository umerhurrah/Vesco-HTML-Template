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

//OWL CAROUSEL FOR TEAM
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true
    });
});

//OWL CAROUSEL FOR TESTIMONIALS
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true
    });
});
