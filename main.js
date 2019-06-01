const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];
// Interfejs
let time = 3000;
let active = 0;
let interval;

// Implementacje

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
interval = setInterval(changeSlide, time)

const keyChangeSlide = () => {
    if (event.keyCode == 37 || event.keyCode == 39) {
        clearInterval(interval);
        event.keyCode == 37 ? active-- : active++;

        if (active < 0) {
            active = dots.length - 1;
        };

        image.src = slideList[active].img;
        changeDot()
        interval = setInterval(changeSlide, time)
    }
}
window.addEventListener('keydown', keyChangeSlide)