

const aboutSwiper= new Swiper(".aboutSwiper", {
    slidesPerView:1,
    spaceBetween:30,
    freeMode: true,
    pagination:{
        el: ".swiper-pagination",
        clickable:true,
        type: 'bullets',
    },
    breakpoints:{
        599:{
            slidesPerView:2,
            spaceBetween:50
        },

    }
});

