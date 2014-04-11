$(function() {

    $('#main').onepage_scroll({
       sectionContainer: 'section',
       easing: 'ease',
       animationTime: 1000,
       pagination: true,
       updateURL: false,
       beforeMove: function(index) {},
       afterMove: function(index) {},
       loop: true,
       keyboard: true
    });

    $('.navbar-nav a[data-section]').on('click', function(e) {
        e.preventDefault();

        $('#main').moveTo(parseInt($(this).data('section'), 10));
    });

    /* Third demo */
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

});