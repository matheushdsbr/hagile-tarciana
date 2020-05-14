$(function() {
  $(window).scroll(function(){
    const heightHeader = $('.header__main').height();
    const heightHero = $('.request-consulation').height();
    const heightScroll = $(document).scrollTop();
    const calcHeaderHero = heightHeader + heightHero;
    console.log(heightHeader, heightHero, heightScroll, calcHeaderHero);
    if (heightScroll > calcHeaderHero) {
      $('.header__main').addClass('header__main--fixed');
    } else {
      $('.header__main').removeClass('header__main--fixed');
    }
  });
});