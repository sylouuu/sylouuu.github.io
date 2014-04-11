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

    $('a[href="#about"]').on('click', function(e) {
        e.preventDefault();

        $('#main').moveTo(1);
    });

    $('a[href="#desoslide"]').on('click', function(e) {
        e.preventDefault();

        $('#main').moveTo(2);
    });

    $('a[href="#phprestclient"]').on('click', function(e) {
        e.preventDefault();

        $('#main').moveTo(3);
    });

    $('a[href="#websitesettings"]').on('click', function(e) {
        e.preventDefault();

        $('#main').moveTo(4);
    });
});