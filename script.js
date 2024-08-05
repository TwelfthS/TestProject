


const cart = document.getElementById('cart-btn')
const cartMenu = document.getElementById('cart-menu')
const mobileMenu = document.getElementById('mobile-menu')
const sendButton = document.getElementById('send-btn')
const nameInput = document.getElementById('name-input')
const phoneInput = document.getElementById('phone-input')
const successWindow = document.getElementById('success-div')
const closeButton = document.getElementById('close-btn')
const burgerButton = document.getElementById('burger-btn')

cart.addEventListener('mouseover', () => {
    cartMenu.classList.remove('hidden')
})

document.addEventListener('click', (evt) => {
    if (!cartMenu.contains(evt.target)) {
        cartMenu.classList.add('hidden')
    }
    if (!successWindow.contains(evt.target) && evt.target !== sendButton) {
        successWindow.classList.add('hidden')
    }
    if (!mobileMenu.contains(evt.target) && evt.target !== burgerButton) {
        mobileMenu.classList.add('hidden')
    }
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    pagination: {
    el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 2,
})

sendButton.addEventListener('click', () => {
    const name = nameInput.value
    const phone = phoneInput.value
    if (name !== '' && phone !== '' && checkPhone(phone)) {
        successWindow.classList.remove('hidden')
    } else {
        console.log('Error in input')
    }
})

closeButton.addEventListener('click', () => {
    successWindow.classList.add('hidden')
})

function checkPhone(phone) {
    phone = phone.replace(/[() -]/g, '')
    const length = phone.length
    if (((length === 11 && phone.charAt(0) === '8') || (length === 12 && phone.charAt(0) === '+' && phone.charAt(1) === 7)) && !isNaN(phone)) {
        return true
    } else {
        return false
    }
}

burgerButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden')
})