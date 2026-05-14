const swiper = new Swiper('.swiper__popular', {
    slidesPerView: 5,
    spaceBetween: 30,

    navigation: {
        nextEl: '.btns__right',
        prevEl: '.btns__left',
    },

    breakpoints: {
        // < 480px — 1 карточка
        0: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        // 480px — 2 карточки
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // 768px — 3 карточки
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        // 1024px — 4 карточки
        1024: {
            slidesPerView: 4,
            spaceBetween: 28,
        },
        // 1280px — 5 карточек (оригинал)
        1280: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});