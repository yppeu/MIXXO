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
    autoplay:true,
    delay:1000,
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


// 햄버거 풀 메뉴
var burgerIcon = document.querySelector('.burger');
var menuBox = document.querySelector('.menu_box');

  burgerIcon.addEventListener('click', function(event) {
  event.preventDefault(); // 링크의 기본 동작 방지

  // menuBox.style.display = "block";
  // menuBox.classList.toggle('show');
  
  if (menuBox.style.display == "block") {
    menuBox.classList.toggle('show');
    menuBox.style.display = "none";
    console.log(menuBox.style.display);
  } else {
    menuBox.style.display = "block";
    menuBox.classList.toggle('show');
    console.log(menuBox.style.display);
  }

});

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', function() {
  var section03 = document.getElementById('section03');
  var sectionTop = section03.offsetTop;
  var sectionHeight = section03.offsetHeight;
  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY;

  // section03가 화면에 진입할 때 액티브 클래스 추가
  if (scrollPosition > sectionTop - windowHeight + sectionHeight / 2) {
    section03.classList.add('active');
  } else {
    // section03가 화면에서 벗어날 때 액티브 클래스 제거
    section03.classList.remove('active');
  }
});