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