const views = new Swiper(".chesse-products_block", {
  direction: "horizontal",
  mousewheel: true,
  keyboard: true,
  simulateTouch: true,
  slidesPerView: 1,
  spaceBetween: 25,
  pagination: {
    el: ".chesse_products_swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    280: {
      slidesPerView: 1.0,
    },
  },
});
