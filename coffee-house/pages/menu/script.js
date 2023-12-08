import Api from "./api.js";

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

//Data from json

const cardWrapper = document.querySelector('.menus__container');
const coffeeButton = document.querySelector('.menu__container-buttons-coffee');
const teaButton = document.querySelector('.menu__container-buttons-tea');
const desertButton = document.querySelector('.menu__container-buttons-desert');

const api = new Api()

const generatingCard = (product, id) => `<div class="menu__item" data-card_category=${product.category} data-card_id=${id + 1} >
<div class="img__container">
  <img src="${product.img}" class="img__item" alt="Menu-Item">
</div>
<div class="menu__item-inf">
  <h3>${product.name}</h3>
  <p>${product.description}</p>
  <h3>${product.price}$</h3>
</div>
</div>`; //функция генерации карточек на страницу


api.getData()
    .then(res => res.json())
    .then(data => data.forEach((product, id) => {
        if (product.category === 'coffee') {
            cardWrapper.insertAdjacentHTML('beforeend', generatingCard(product, id))
        }
    }))

coffeeButton.addEventListener('click', (event) => {
        cardWrapper.innerHTML = '';
            api.getData()
            .then(res => res.json())
            .then(data => data.forEach((product, id) => {
                if (product.category === 'coffee') {
                    cardWrapper.insertAdjacentHTML('beforeend', generatingCard(product, id))
                }
            }))
        })

teaButton.addEventListener('mousedown', (event) => {
        cardWrapper.innerHTML = '';
        api.getData()
        .then(res => res.json())
        .then(data => data.forEach((product, id) => {
            if (product.category === 'tea') {
                cardWrapper.insertAdjacentHTML('beforeend', generatingCard(product, id))
            }
        }))
    })