const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;
const dots = document.getElementsByClassName("dot");
const dotContainer = document.querySelector(".dots");
const timer = 5000;
let PlayInterval;

document
    .getElementById("carousel-button-next")
    .addEventListener("click", moveToNextSlide);
document
    .getElementById("carousel-button-prev")
    .addEventListener("click", moveToPrevSlide);
createDots();

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

function moveToNextSlide() {
    hideAllSlides();
    hideDotActive();
    clearInterval(PlayInterval);
    autoPlay();
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
    dots[slidePosition].classList.add("dot-active");
}

function moveToPrevSlide() {
    hideAllSlides();
    hideDotActive();
    clearInterval(PlayInterval);
    autoPlay();
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dotContainer.appendChild(dot);
    }
    dots[0].classList.add("dot-active");
}

function hideDotActive() {
    for (const dot of dots) {
        dot.classList.remove("dot-active");
    }
}

function autoPlay() {
    PlayInterval = autoSlide = setInterval(moveToNextSlide, timer);
}