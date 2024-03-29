const views = new Swiper(".our-products__block", {
  direction: "horizontal",
  mousewheel: true,
  keyboard: true,
  simulateTouch: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".our_products__swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
    },
    530: {
      slidesPerView: 2,
    },
    780: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
