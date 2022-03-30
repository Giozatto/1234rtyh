const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderDot = Array.from(document.querySelectorAll('.slider__dot'))
const leftButton = document.querySelector('.slider__arrow_prev');
const rightButton = document.querySelector('.slider__arrow_next');
rightButton.onclick = changeNextSlide;
leftButton.onclick = changePrevSlide;
let index = 0;
let dotIndex = 0;
for (let i = 0; i < sliderDot.length; i++) {
    sliderDot[i].onclick = changeDot;
}

function changeNextSlide() {
    sliderItem[index].classList.remove('slider__item_active');
    index++;
    if (index == sliderItem.length) {
        index = 0;
    }
    sliderItem[index].classList.add('slider__item_active');
}

function changePrevSlide() {
    sliderItem[index].classList.remove('slider__item_active');
    index--;
    if (index < 0) {
        index = sliderItem.length - 1;
    }
    sliderItem[index].classList.add('slider__item_active');
}

function changeDot(event) {
    dotIndex = sliderDot.indexOf(event.target);
    sliderItem[index].classList.remove('slider__item_active');
    index = dotIndex;
    sliderItem[index].classList.add('slider__item_active');
}
