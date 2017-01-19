$(document).ready(function(){

 	// Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// smoth scroll
	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
	});

  $('.hamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.header .menu').toggleClass('active');
    $('.mobile-menu').toggleClass('active');
  });

  $('.right_menu_title').on('click', function(){
    $(this).toggleClass('active');
    $(this).parent().toggleClass('active');
  });

  $('.right_menu > ul > .for_price > a').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('active');
    $(this).parent().find('ul').toggleClass('active');
  });

  $('.zavod_image-mobile').slick();

  $('.good-mobile-slider').slick({
    arrows: false,
    dots: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
  $('.good-mobile-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('#slickCurrent').text(nextSlide + 1);
  });

  var countSlides = 1;
  $.each($('.good-mobile-slider .slick-cloned'), function( index, value ) {
    countSlides++
  });
  // countSlides = (countSlides / 2 ) - 1

  $('#slickTotal').text(countSlides);

  $('.steps-slider').slick();

});
