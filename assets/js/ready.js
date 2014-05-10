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
    $('#slideshow').desoSlide({
        thumbs: $('#desoslide_demo_thumbs li > a'),
        effect: {
            provider: 'animate',
            name: 'sideFadeBig'
        },
        overlay: 'hover',
        controls: {
            show: false
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