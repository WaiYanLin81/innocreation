$(document).ready(function(){
    // $('.side-bar-show').click(function(){
    //      $('.side-nav-bar').addClass('active');
    //     addMobileNav();
    // });
    //
    // $('.side-nav-hide').click(function () {
    //     $('.side-nav-bar').removeClass('active');
    //
    // });
    $(function () {
        $("#header").load('components/header.html');
    });
    $(function () {
        $("#footer").load('components/footer.html')
    })
    $('#header').on('click',function (event) {
      const current =  $(event.target);
        if(current.hasClass('show-icon')){
            $('.side-nav-bar').addClass('active');
            addMobileNav();
        }else if(current.hasClass('hide-icon')){
            $('.side-nav-bar').removeClass('active');
        }
    });
    $(window).scroll(function () {
        const currentScroll = $(this).scrollTop();
        const screenHeight = $(window).height();
        if(currentScroll >= screenHeight -80){
            fadeIn();
        }else if(currentScroll === 0){
            fadeIn();
        }else {
            $('.nav-bar-container').fadeOut(500);
        }
    });
    function fadeIn() {
        $('.nav-bar-container').fadeIn(500);
    };
    function addMobileNav(x=null) {
        $('.side-nav-bar').css({
            transition:"0.8s",
        })
        let requestNavIem = $('.navbar-nav').html();
        $('.mobile-nav').html(requestNavIem);
    };
});

