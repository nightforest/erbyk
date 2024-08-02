import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const partnersSlider = () => {
    new Swiper('.partners-slider', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        navigation: {
            nextEl: '.partners-slider__next',
            prevEl: '.partners-slider__prev',
        },
    });
}

export default partnersSlider;
