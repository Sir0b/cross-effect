import '../scss/style.scss';


const burger = document.querySelector( '.btn-burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
})