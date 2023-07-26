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
// var swiperEducational = new Swiper('.swiper-educational', {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//         390: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//         },
//         480: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//         },
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 15,
//         },
//         1200: {
//             slidesPerView: 4,
//             spaceBetween: 20,
//         }
//     }
// });