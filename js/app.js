$(document).ready(function(){
    $('.side-bar-show').click(function(){
         $('.side-nav-bar').addClass('active');
    });

    $('.side-nav-hide').click(function () {
        $('.side-nav-bar').removeClass('active');
    });
    $(window).resize(function () {
      const currentWidth =  $(this).width();
      if(currentWidth <= 567.9){
        addMobileNav();
      }else {
          $('.mobile-nav-item').addClass('border-radius btn btn-primary')
      }
    });
    $(window).on('load',function () {
      let currentWidth =  $(this).width();
      if(currentWidth <= 567.9){
          addMobileNav();
      }else {
          $('.mobile-nav-item').addClass('border-radius btn btn-primary')
      }
    })
    function addMobileNav(x=null) {
        let requestNavIem = $('.navbar-nav').html();
        $('.mobile-nav').html(requestNavIem);
        $('.mobile-nav-item').removeClass('border-radius btn btn-primary');
    }
})
