import Swiper, { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const productSlider = () => {
    new Swiper('.product-slider', {
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        loop: false,
        centeredSlides: false,
        observer: true,
        speed: 700,
        observeParents: true,
        watchOverflow: true,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            bulletElement: "button",
            clickable: true,
        },
        navigation: {
            nextEl: '.product-slider__next',
            prevEl: '.product-slider__prev',
        },
    });
}

export default productSlider;