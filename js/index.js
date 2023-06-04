window.addEventListener('load', function() {
  var headerHeight = document.querySelector('header').offsetHeight;
  console.log(headerHeight);
  var banner = document.querySelector('.banner-group');
  banner.style.paddingTop = headerHeight + 'px';
});



var swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    autoplay: {
      delay: 2000,
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".mySwiper3", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: false,
      slideShadows: false,
      shadowOffset: 10,
      shadowScale: 0.6,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });