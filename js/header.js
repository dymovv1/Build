let lastScrollTop = 0;
const header = document.querySelector('header');

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const mediaQuery = window.matchMedia('(max-width: 886px)');

function handleScroll() {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
        header.classList.add('is-hidden');
    } else {
        header.classList.remove('is-hidden');
    }

    lastScrollTop = currentScrollTop;
}

function handleMediaQueryChange(e) {
    if (e.matches) {
        header.classList.add('sticky-header');
        window.removeEventListener('scroll', handleScroll);
    } else {
        header.classList.remove('sticky-header');
        window.addEventListener('scroll', handleScroll);
    }
}

handleMediaQueryChange(mediaQuery);

mediaQuery.addListener(handleMediaQueryChange);
