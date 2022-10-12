//creo l'arrey 
const slides = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

//selezione l'elemento della DOM
const slidesEl = document.querySelector('.my_slides');

//creo variabile per vedere la slide attiva
let imageActive = 0;

for (let i = 0; i < slides.length; i++) {
    const element = slides[i];
    const slideMarkup = `<img class="${i === imageActive ? 'active' : ''}" src="${element}" alt="">`
    slidesEl.insertAdjacentHTML('beforeend', slideMarkup);
}