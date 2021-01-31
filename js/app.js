$(document).ready(function(){
    $(window).scroll(function () {
        const currentScroll = $(this).scrollTop();
        const screenHeight = $(window).height();
        if(currentScroll >= screenHeight - 80){
            $('.nav-bar-container').addClass('active');
            $('.nav-bar-container').fadeIn(1000);
        }else if(currentScroll === 0){
            $('.nav-bar-container').fadeIn(0);
        }else{
            $('.nav-bar-container').removeClass('active');
            $('.nav-bar-container').fadeOut(0);
        }
    });

    $('.show-icon').click(function () {
        $('.side-nav-bar').addClass('active');
        addMobileNav();
    })
    $('.hide-icon').click(function () {
        $('.side-nav-bar').removeClass('active');
    });
    function addMobileNav(x=null) {
        $('.side-nav-bar').css({
            transition:"0.8s",
        })
        let requestNavIem = $('.navbar-nav').html();
        $('.mobile-nav').html(requestNavIem);
    };
    console.log('go')

});


