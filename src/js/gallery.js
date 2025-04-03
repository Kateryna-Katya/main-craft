import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.gallery-swiper', {
        modules: [Navigation], 
        slidesPerView: 1, 
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        slideClass: 'gallery-swiper-slide',
        wrapperClass: 'gallery-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },

        on: {
            slideChange: function () {
                const progressBar = document.querySelector('.pag_bar');
                const totalSlides = this.slides.length - this.loopedSlides * 2; 
                const step = 100 / (totalSlides - 1); 
                const moveX = this.realIndex * step;

                if (progressBar) {
                    progressBar.style.transform = `translateX(${moveX}%)`;
                }
            },
        },
    });
});