//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader

// start team owl carousel
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
        responsive: {

            320: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            },
            992: {
                items: 1,
                nav: false
            },

        }
    });
});
// end team owl carousel