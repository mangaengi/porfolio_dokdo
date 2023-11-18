/* AOS_JS */
AOS.init();
    
/* 상단 스와이퍼 */
var swiper = new Swiper(".BgSwiper", {
    rewind: true,
    loop : true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },speed : 1000,
});

/* Notice 스와이퍼 */
var swiper = new Swiper(".NoticeSwiper", {
    breakpoints: {
        // 화면의 넓이가 640px 이상일 때
        640: {
            slidesPerView: 1.9,
            spaceBetween: 20,
            },
        },
    autoplay: {
        delay: 2500, 
        loop: true,
    },

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        extEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});