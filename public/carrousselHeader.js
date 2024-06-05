"use strict"

const containerHeader = document.querySelector(".header_main_background")
const backgroundHeaderMain = document.querySelectorAll(".backgroundHeaderMain")
const barBackground = document.querySelectorAll(".barBackground")
let totalSlides = backgroundHeaderMain.length;
let slideInterval;
let currentIndex = 0;
let slideWidth;

function centerSlides() {
    const wrapperWidth = containerHeader.offsetWidth;
    slideWidth = backgroundHeaderMain[0].offsetWidth;
    let offset = (wrapperWidth - slideWidth) / 2 - currentIndex * slideWidth;

    if (currentIndex === 0) {
        offset = 0;
    }

    containerHeader.style.transform = `translateX(${offset}px)`;
}
centerSlides()

window.addEventListener('resize', () => {
    centerSlides();
})

function updateSlidePosition() {
    const offset = -currentIndex * slideWidth;
    containerHeader.style.transform = `translateX(${offset}px)`;
    containerHeader.style.transition = "0.5s"
    updateControlButtons();
}

// Adiciona manipuladores de eventos aos botões de controle

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

function updateControlButtons() {
    barBackground.forEach((button, index) => {
        button.classList.toggle('selectedBar', index === currentIndex);
    });
}
function startSlideInterval() {
    slideInterval = setInterval(() => {
        showNextSlide();
    }, 5000);
}

startSlideInterval();