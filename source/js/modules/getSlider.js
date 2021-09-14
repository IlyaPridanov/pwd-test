'use strict';

(function () {
    var sliderContainers = document.querySelectorAll('.slider');

    var getBlockSlider = function (slider) {
        if (slider) {
            var container = slider.querySelector('.swiper-container');
            var slides = slider.querySelectorAll('.swiper-slide');
            var prev = slider.querySelector('.js-btn-next');
            var next = slider.querySelector('.js-btn-prev');
            var pagination = slider.querySelector('.swiper-pagination');
            var slidesPerView = 1;
            var slidesPerView991 = 1;
            var slidesPerView768 = 1;
            var slidesPerView480 = 1;
            var slidesPerView320 = 1;
            var spaceBetween = 24;
            var spaceBetween991 = 15;
            var spaceBetween768 = 15;
            var spaceBetween480 = 7;
            var spaceBetween320 = 7;
            var loop = true;
            var allowTouchMove = true;
            var direction = 'horizontal';
            var autoHeight = false;
            console.log(slides.length);
            // if (slides.length < 2) {
            //     loop = false;
            // }
            if (slider.dataset.slider === "line") {
                slidesPerView991 = 3;
                slidesPerView768 = 2;
                slidesPerView = 4;
                spaceBetween = 5;
            }
            if (slider.dataset.slider === "contact") {
                allowTouchMove = false;
            }
            if (slider.dataset.slider === "big-card") {
                slidesPerView = 2;
                spaceBetween = 15;
            }
            if (slides.length >= 2) {
                return new window.Swiper(container, {
                    direction: direction,
                    allowTouchMove: allowTouchMove,
                    loop: loop,
                    autoHeight: autoHeight,
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    // updateOnWindowResize: false,
                    pagination: {
                        el: pagination,
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: slidesPerView320,
                            spaceBetween: spaceBetween320,
                        },
                        480: {
                            slidesPerView: slidesPerView480,
                            spaceBetween: spaceBetween480,
                        },
                        768: {
                            slidesPerView: slidesPerView768,
                            spaceBetween: spaceBetween768,
                        },
                        991: {
                            slidesPerView: slidesPerView991,
                            spaceBetween: spaceBetween991,
                        },
                        1200: {
                            slidesPerView: slidesPerView,
                            spaceBetween: spaceBetween,
                        },
                    },
                });
            }
        }
    };

    sliderContainers.forEach(function (currentValue) {
        getBlockSlider(currentValue);
    });
})();
