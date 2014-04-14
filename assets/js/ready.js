$(function() {

    // One page scroll plugin
    $('#main').onepage_scroll({
       pagination: false,
       loop: true,
       responsiveFallback: 800
    });

    // Navbar links
    $('.navbar-nav a[data-section]').on('click', function(e) {
        e.preventDefault();

        $('#main').moveTo(parseInt($(this).data('section'), 10));
    });

    // desoSlide demo
    $('#desoslide_demo_thumbs').desoSlide({
        main: {
            container: '#desoslide_demo_main_image',
            cssClass: 'img-responsive'
        },
        auto: {
            start: false
        },
        effect: 'sideFadeBig',
        overlay: 'hover',
        caption: true,
        controls: {
            enable: false,
            keys: false
        }
    });

    // WOW
    new WOW().init();

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip({
        container:  'body',
        trigger:    'hover',
        html:       true
    });

});