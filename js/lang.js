// function for changeLang ...>>

document.addEventListener('DOMContentLoaded', function() {
    const btnEnglish = document.querySelector('#english');
    const btnFrance = document.querySelector('#france');
    const btnNetherlands = document.querySelector('#netherlands');
    const elementsToChangeLang = document.querySelectorAll('[data-eng], [data-france], [data-netherlands]');

    function changeLang(lang) {
        elementsToChangeLang.forEach(element => {
            const content = element.getAttribute(`data-${lang}`);
            element.textContent = content;
        });

        localStorage.setItem('selectedLanguage', lang);
    }

    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        changeLang(savedLanguage);
    } else {
        changeLang('eng');
    }

    btnEnglish.addEventListener('click', function () {
        changeLang('eng');
    });

    btnFrance.addEventListener('click', function () {
        changeLang('france');
    });

    btnNetherlands.addEventListener('click', function () {
        changeLang('netherlands');
    });
});


// for style 

const activeBtnAdditionalLang = document.querySelector('.header-langs');
const showAdditionalLang = document.querySelector('.header-langs__additional');

activeBtnAdditionalLang.addEventListener('click', () => {
    showAdditionalLang.classList.toggle('is-active');
})
