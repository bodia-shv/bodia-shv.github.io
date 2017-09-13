$(window).scroll(function() {
    var
        wScroll = $(window).scrollTop(),
        stickyStart = $('.start_percent_animation').offset().top;

    if (wScroll >= stickyStart) {

        $('svg:nth-child(2) path').css('animation', 'load 7s');
    }
});