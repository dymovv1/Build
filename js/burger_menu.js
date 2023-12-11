const burgerMenu = document.querySelector('.burger-menu');
const burgerLines = document.querySelectorAll('.burger-line');

function burgerAddClass() {
    burgerLines.forEach(line => {
        line.classList.toggle('is-active');
    });
}

burgerMenu.addEventListener('click', burgerAddClass);

const headerLangMobile = document.querySelector('.header-langs') 
const headerNavigation = document.querySelector('.header-nav');
const headerWrapper = document.querySelector('.header-wrapper');

burgerMenu.addEventListener('click', ()=> {
    headerLangMobile.classList.toggle('is-active');
    headerNavigation.classList.toggle('is-active');
    headerWrapper.classList.toggle('is-active');
    document.body.classList.toggle('is-blocked')

})