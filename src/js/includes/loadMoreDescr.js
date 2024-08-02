const loadMoreDescr = () => {    
    const loadMoreTextAll = document.querySelectorAll('.product__text');

    loadMoreTextAll?.forEach(item => {
        const loadMoreToggle = item.nextElementSibling;

        loadMoreToggle?.addEventListener('click', () => {
            const moreText = loadMoreToggle.getAttribute('data-load-more');
            const lessText = loadMoreToggle.getAttribute('data-load-less');

            item.classList.toggle('is-visible');

            loadMoreToggle.innerText === moreText
                ? loadMoreToggle.innerText = lessText
                : loadMoreToggle.innerText = moreText;

            console.log(moreText, lessText)
        });
    });
}

export default loadMoreDescr;