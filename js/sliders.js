import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const heroSlider = new Swiper(".swiper.slider-hero ", {
  navigation: {
    nextEl: ".hero__button_next",
    prevEl: ".hero__button_prev",
  },

  // autoplay: {
  //   delay: 1000,
  //   disableOnInteraction: true,
  // },

  // autoHeight: true,
});

const aboutClinicSlider = new Swiper(".clinic-about-slider", {
  navigation: {
    nextEl: ".about-clinic__button_next",
    prevEl: ".about-clinic__button_prev",
  },
});

const reviewsSlider = new Swiper(".slider-reviews", {
  navigation: {
    nextEl: ".slider-reviews__button_prev",
    prevEl: ".slider-reviews__button_next",
  },

  spaceBetween: 40,
  slidesPerView: 3,

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 5,
    },

    650: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    767: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const some = 0;

export { some };
