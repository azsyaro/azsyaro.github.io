$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var pos = $($(this).attr('href')).offset().top;

    $('body, html').animate({
        scrollTop: pos
    }, 500);
});