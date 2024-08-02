import MouseFollower from "mouse-follower";
import 'mouse-follower/src/scss/index.scss';
import gsap from "gsap";

const customCursor = () => {
    MouseFollower.registerGSAP(gsap);

    if (window.innerWidth >= 1200) {
        const cursor = new MouseFollower({
            speed: .5,
            iconSvgSrc: '/img/icons.svg',
            stateDetection: {
                '-pointer': 'a, button, label, .button, .input',
                '-hidden': 'iframe',
                '-exclusion': '.button',
            },
        });

        cursor.setImg('/img/logo.svg');

        let items = document.querySelectorAll('.faq-card, .advantage-card, .project-card, .category-card, .gallery-card, .product-slider__link, .draw-card');

        items.forEach(function(el) {
            el.addEventListener('mouseenter', () => {
                cursor.setText('+');
                cursor.removeImg();
            });
        });
        items.forEach(function(el) {
            el.addEventListener('mouseleave', () => {
                cursor.removeText();
                cursor.setImg('/img/logo.svg');
            });
        });
    }
}

export default customCursor;