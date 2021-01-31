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
    // $('#header').on('click',function (event) {
    //     const current =  $(event.target);
    //     if(current.hasClass('show-icon')){
    //         $('.side-nav-bar').addClass('active');
    //         addMobileNav();
    //     }else if(current.hasClass('hide-icon')){
    //         $('.side-nav-bar').removeClass('active');
    //     }
    // });
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

});

