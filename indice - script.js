//JS
const bajar = $(function (){
    $(window).scroll(function(){
    if ($(this).scrollTop() > 70) {
        $('.barra').addClass('bg_blanco');
    } else {
        $('.barra').removeClass('bg_blanco');
    }
    });
});

