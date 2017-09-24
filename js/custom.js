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

//COUNTER
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

//OWL CAROUSEL FOR CLIENTS
$(function () {
    $("#clients-list").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true
    });
});
