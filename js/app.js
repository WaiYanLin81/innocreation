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
    // function addMobileNav(x=null) {
    //     $('.side-nav-bar').css({
    //         transition:"0.8s",
    //     })
    //     let requestNavIem = $('.navbar-nav').html();
    //     $('.mobile-nav').html(requestNavIem);
    // };
    $(function () {
        $("#header").load('header.html');
    });
    $('#header').on('click',function (event) {
      let current =  $(event.target);
      console.log(current);
        if(current.hasClass('show-icon')){
            $('.side-nav-bar').addClass('active');
            addMobileNav();
        }else if(current.hasClass('hide-icon')){
            $('.side-nav-bar').removeClass('active');
        }
    })
});

