if ($(window).width() > 650) {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 40) {
            $('#navbar').addClass("fixed-top");
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
            $('#navbar').removeClass("fixed-top");
            $('body').css('padding-top', '0');
        }
    });
}