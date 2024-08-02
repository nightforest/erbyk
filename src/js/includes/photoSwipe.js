import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const photoSwipe = () => {
    const lightbox = new PhotoSwipeLightbox({
        gallery: '.product-slider, .gallery-section__list, .product-section__drawing',
        children: 'a',
        bgOpacity: 0.5,
        showHideAnimationType: 'fade',
        pswpModule: () => import('photoswipe')
    });

    lightbox.init();
}

export default photoSwipe;