(function(){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.scrollY > 50){
            header.classList.add('header_active');
        }
        else if(window.scrollY < 50) {
            header.classList.remove('header_active');
        }
    }
}());

(function(){
    const burgerItem = document.querySelector('.burger');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menu = document.querySelector('.header__nav');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
}());