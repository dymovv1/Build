let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
        header.classList.add('is-hidden');
    } else {
        header.classList.remove('is-hidden');
    }

    lastScrollTop = currentScrollTop;
});
