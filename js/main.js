
const nav = document.querySelector('.nav__row')

document.querySelector('.nav__btn').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    nav.classList.toggle('nav__mobile')
}