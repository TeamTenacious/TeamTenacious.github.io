const swiper = new Swiper('.card-wrapper', {
    loop: false,
    spaceBetween: 550,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1

        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
    }
    }
});