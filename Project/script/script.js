 $('.about-items>div').on('click',function(){
$(this).find('.about-icon').toggleClass('about-rotate-icon');
$(this).parent('.about-items').toggleClass('change-color');
$(this).find('.about_pritatle').toggleClass('about_pritatle-color');
$(this).find('.about-town').toggleClass('about-town-color');
$(this).find('.about-icon-block').toggleClass('about-icon-block-color');
$(this).next('.about-text').slideToggle(300);
})

$('.customers_items>div').on('click',function(){
    $(this).find('.customers_subtitle_text').toggleClass('customers_subtitle_tex-color');
    $(this).next('.customers_text').slideToggle(300);
})

$('.customers_items').on('click',function(){
    $(this).find('.customers_line').toggleClass('customers_line-color');
})