$(function () {
$(".menu a,.go-top").on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body,html").animate({ scrollTop: top }, 1500);
});

  $(".slider-blog__inner").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/arrow-right.svg" alt="arrow-right"></button>',
    nextArrow:
      '<button type="button" class="slick-next"> <img src="img/arrow-left.svg" alt="arrow-left"></button>',
        responsive: [
    {
      breakpoint: 1440,
      settings: {
    arrows:false
      }
    },
  ]
});

  $(".menu__btn, .menu__list-item a").on("click", function () {
    $(".menu__list").toggleClass("menu__list_active");
    $(".header__top-inner").toggleClass("header__top-inner_active");
  });
  
var mixer = mixitup(".porfolio__content");
});
