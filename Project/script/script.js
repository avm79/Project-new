 $('.about-items>div').on('click',function(){
$(this).find('.about-icon').toggleClass('about-rotate-icon');
$(this).parent('.about-items').toggleClass('change-color');
$(this).find('.about_pritatle').toggleClass('about_pritatle-color');
$(this).find('.about-town').toggleClass('about-town-color');
$(this).find('.about-icon-block').toggleClass('about-icon-block-color');
$(this).next('.about-text').slideToggle(300);

})

