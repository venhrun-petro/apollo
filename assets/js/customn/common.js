
$(document).ready(function(){
    $('.multiple-items').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ]
    });

    $(".burger").click(function(){
        $(this).next().slideToggle();
        });
        $('.burger').click(function(){
        $('.burger').toggleClass('opened');
        $('.nav').toggleClass('nav-active');
    });
    $('.header_cont_nav ul li').click(function(){
      $('.header_cont_nav ul li').not(this).removeClass('sub-active');
        $(this).toggleClass('sub-active');
    });
   
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
      $(".header").addClass("header-active");
  } else {
      $(".header").removeClass("header-active");
  }
});

 