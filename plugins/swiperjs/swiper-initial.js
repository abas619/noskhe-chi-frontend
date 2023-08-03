var swiperBlogsHome = new Swiper('.swiper-blogs-home', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    // },
    breakpoints: {
        390: {
            slidesPerView: 1,
            // spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            // spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            // spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            // spaceBetween: 20,
        }
    }
});

var swiperCalendar = new Swiper('.swiper-calendar', {
    slidesPerView: 3,
    spaceBetween: 0,
    watchSlidesProgress: true,
    breakpoints: {
        390: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 7,
        }
    }
});

var swiperRelative = new Swiper('.swiper-relative', {
    spaceBetween: 30,
    thumbs: {
        swiper: swiperCalendar,
    },
});
