$(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $loader = $preloader.find('.loader');
        $loader.delay(300).fadeOut('slow');
        $preloader.delay(250).fadeOut('slow');
    });

$(document).ready(function () {

/* BACKGROUND MOVE */
    $('.container_layer').backgroundMove({
     movementStrength:'100'
});
/* Scroll animation (about me) */
    


    
/* Index entered anim */
    function func() {
        let center_bl = $('#center_bl');
        let center_bl_lg = $('#center_bl_lg');
        let enter_bt = $('#enter__button');
            enter_bt.on('click', function(e) {
                e.preventDefault();

                center_bl.css('display', 'none');
                center_bl_lg.css('display', 'flex');

        })
     }   
    func();
/* Blog sidebar  */
    $('#toggle_sidebar').on('click', function(e) {
       $('.left_nav_side').toggleClass('active__left_nav_side');
       e.preventDefault();

    })
/* Main Navigation */
    $('.btn__nav').on('click', function(e) {
        $('.navigation').toggleClass('active_navigation');
        e.preventDefault();
    })


/* Delete value onfocus (input) */
    $('.log__pass').on('focus', function () {
        $(this).removeAttr('value');
    })
    $('textarea').on('focus', function () {
        $(this).text('');
    })

/* Reset button */

    // $('.reset_form').on('click', function (e) {
    //     e.preventDefault();
    //     $('log__pass').text('');
    //     $('textarea').text('');
    // })

/* Menu fixed (blog) */
    /*$(window).scroll(function() {
    var
        wScroll = $(window).scrollTop(),
        menu = $('.static .menu'),
        sidebar = $('.static .menu__wrapper '),
        stickyStart = sidebar.offset().top,
        menuClone = sidebar.clone(),
        fixedSidebar = $('.fixed .left_nav_side');

    if (wScroll >= stickyStart) {

        // menu.css({
        //  top : wScroll - stickyStart + 'px'
        // });

        if (!fixedSidebar.find('.menu__wrapper').length) {
            fixedSidebar.append(menuClone);
            menu.hide();
        }


    } else {
        fixedSidebar.find('.menu__wrapper').remove();
        menu.show();
    }

});*/




});


//callback