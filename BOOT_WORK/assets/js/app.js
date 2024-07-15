const slickSlide = jQuery('#slick-slide')   /*slickSlide가 존재하면 밑의 목록 '.' / 화살표 / 화면 3개 / scroll 1 등 옵션*/

if (slickSlide) {
  slickSlide.slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
}