//BURGER
const burgerIcon = document.querySelector('.menu__icon');
const navMenu = document.querySelector('.nav__hidden')
burgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('_active')
    burgerIcon.classList.toggle('_active')
    document.body.classList.toggle('overflow')
})

document.addEventListener('click', (e) => {
    if (e.target !== (navMenu && burgerIcon)) {
        navMenu.classList.remove('_active');
        burgerIcon.classList.remove('_active');
    }
})

navMenu.addEventListener('click', () => {
    navMenu.classList.remove('_active')
    burgerIcon.classList.remove('_active');
    document.body.classList.remove('overflow')
})

//slider

const sliderItem = document.querySelector('.slider__wrapper');
const sliderList = document.querySelectorAll('.slider__item');
const prevButton = document.querySelector('.slider__button-left');
const nextButton = document.querySelector('.slider__button-right');
const sliderIndicator = document.querySelectorAll('.slider__button');

let position = 0;
let sliderIndex = 0;

const nextSlide = () => {
    if (document.documentElement.clientWidth >= 768) {
        if (position < (sliderList.length - 1) * 480) {
            position += 480;
            sliderIndex++;
        } else {
            position = 0;
            sliderIndex = 0;
        }
        sliderItem.style.left = -position + 'px';
        thisSlide(sliderIndex)
    } else if (document.documentElement.clientWidth < 767) {
        if (position < (sliderList.length - 1) * 348) {
            position += 348;
        } else {
            position = 0
        }
        sliderItem.style.left = -position + 'px';
    }
}

const prevSlide = () => {
    if (position > 0) {
        position -= 480;
    } else {
        position += (sliderList.length - 1) * 480
    }
    sliderItem.style.left = -position + 'px';
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(() => {
    nextSlide();
    thisSlide(sliderIndex)
}, 5000)

const progressBarList = document.querySelectorAll('.progress__slider')

const thisSlide = (index) => {
    progressBarList[index].style.transition = 'width 7s';
    progressBarList[index].style.width = '100%';
}