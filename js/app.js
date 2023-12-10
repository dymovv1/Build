const navLiList = document.querySelectorAll('.header-nav__li');

navLiList.forEach(function(navLi) {
    navLi.addEventListener('click', function(event) {
        event.preventDefault(); 
        navLi.classList.add('is-active');
        alert('work');
    });
});

