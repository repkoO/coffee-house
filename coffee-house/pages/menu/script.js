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

coffeeButton.addEventListener('click', () => {
        cardWrapper.innerHTML = '';
            api.getData()
            .then(res => res.json())
            .then(data => data.forEach((product, id) => {
                if (product.category === 'coffee') {
                    cardWrapper.insertAdjacentHTML('beforeend', generatingCard(product, id))
                }
            }))
            coffeeButton.style.backgroundColor === 'transparent' ? coffeeButton.style.backgroundColor = '#665F55' : coffeeButton.style.backgroundColor === 'transparent'
        })

teaButton.addEventListener('click', () => {
        cardWrapper.innerHTML = '';
        api.getData()
        .then(res => res.json())
        .then(data => data.forEach((product, id) => {
            if (product.category === 'tea') {
                cardWrapper.insertAdjacentHTML('beforeend', generatingCard(product, id))
            }
        }))
        if (coffeeButton.style.backgroundColor === '#665F55' || desertButton.style.backgroundColor === '#665F55') {
            coffeeButton.style.backgroundColor = 'transparent';
            desertButton.style.backgroundColor = 'transparent';
        }
        coffeeButton.children[1].style.color = '#403F3D';
        teaButton.style.backgroundColor = '#665F55';

    })

desertButton.addEventListener('click', () => {
    cardWrapper.innerHTML = '';
    api.getData()
    .then(res => res.json())
    .then(data => data.forEach((product, id) => {
        if (product.category === 'dessert') {
            cardWrapper.insertAdjacentHTML('beforeend', generatingCard(product, id))
        };
        if (teaButton.style.backgroundColor === 'transparent' || coffeeButton.style.backgroundColor === 'transparent') {
            desertButton.style.backgroundColor = '#665F55';
            coffeeButton.style.backgroundColor = 'transparent';
        }
        teaButton.style.backgroundColor = 'transparent';
        teaButton.children[1].style.color = '#403F3D';
        coffeeButton.children[1].style.color = '#403F3D';
    }))
})

//Modal Window

const wrapperModals = document.querySelector('.menus__container');
const fixedOverlay = document.querySelector('.fixed__overlay');
const modalWrapper = document.querySelector('.modal__wrapper')

const generateModalWindow = (product) =>`<div class="modal__container">
  <div class="modal__img">
    <img src="${product.img}" alt="">
  </div>
  <div class="modal__description">
    <div class="modal__title">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    </div>
    <div class="modal__size">
      <p>Size</p>
      <div class="modal__size-buttons">
        <div class="modal__size-button active">
          <div class="modal__size-title"><p>S</p></div>
          <div class="modal__size-ml"><span>${product.sizes.s.size}</span></div>
        </div>
        <div class="modal__size-button">
          <div class="modal__size-title"><p>M</p></div>
          <div class="modal__size-ml"><span>${product.sizes.m.size}</span></div>
        </div>
        <div class="modal__size-button">
          <div class="modal__size-title"><p>L</p></div>
          <div class="modal__size-ml"><span>${product.sizes.l.size}</span></div>
        </div>
      </div>
    </div>
    <div class="modal__additives">
      <p>Additives</p>
      <div class="modal__addiv-container">
        <div class="modal__addiv-button">
          <div class="modal__addiv-button-title">
            <p>1</p>
          </div>
          <div class="modal__addiv-one modal__addiv-title"><span>${product.additives[0].name}</span></div>
        </div>
        <div class="modal__addiv-button">
          <div class="modal__addiv-button-title">
            <p>2</p>
          </div>
          <div class="modal__addiv-two modal__addiv-title"><span>${product.additives[1].name}</span></div>
        </div>
        <div class="modal__addiv-button">
          <div class="modal__addiv-button-title">
            <p>3</p>
          </div>
          <div class="modal__addiv-three modal__addiv-title"><span>${product.additives[2].name}</span></div>
        </div>
      </div>
    </div>
    <div class="modal__total">
      <p>Total:</p>
      <p>$${product.price}</p>
    </div>
    <div class="modal__alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g clip-path="url(#clip0_268_9737)">
          <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_268_9737">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <span>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
      </span>
    </div>
    <div class="modal__close">
      <p class="close__button">Close</p>
    </div>
  </div>
</div>`

wrapperModals.addEventListener('click', (event) => {
    const cardId = Number(event.target.closest('.menu__item').dataset.card_id);
    fixedOverlay.style.display = 'block';
    document.body.classList.add('overflow')
    api.getData()
        .then(res => res.json())
        .then(data => data.filter((element, index) => {
            if (cardId === index + 1) {
                modalWrapper.insertAdjacentHTML('afterbegin', generateModalWindow(element))
            }
        }))
})

document.body.addEventListener('click', (event) => {
    event.stopImmediatePropagation()
    const closeElement = event.target;
    if (closeElement.classList[0] === 'modal__close' || closeElement.classList[0] === 'close__button') {
        fixedOverlay.style.display = 'none';
        document.body.classList.remove('overflow')
        modalWrapper.innerHTML = ''
    };
    if (event.target.classList[0] === 'fixed__overlay' || event.target.classList[0] === 'modal__wrapper') {
        fixedOverlay.style.display = 'none';
        document.body.classList.remove('overflow')
        modalWrapper.innerHTML = ''
    };
    console.log(event.target)
})

document.addEventListener("keydown", (e) => { //закрытие форм на Esc
    if (e.key === "Escape") {
        fixedOverlay.style.display = 'none';
        document.body.classList.remove('overflow')
        modalWrapper.innerHTML = ''
    }
  });
