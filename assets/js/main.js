//creo l'arrey 
const slides = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

//selezione l'elemento della DOM
const slidesEl = document.querySelector('.slides');

//creo variabile per vedere la slide attiva
let imageActive = 0;

for (let i = 0; i < slides.length; i++) {
    const url = slides[i];
    const slideMarkup = `<img class="${i === imageActive ? 'active' : ''}" src="./assets/img/${url}" alt="">`;
    console.log(slideMarkup);
    slidesEl.insertAdjacentHTML('beforeend', slideMarkup);
}
//seleziono i pulsanti
const nextEl = document.querySelector('.next');
const prevEl = document.querySelector('.prev');

//click sul pulsante next
nextEl.addEventListener('click', function(){
    console.log('hai cliccato next');
    //selezione immagini
    const allSlides = document.querySelectorAll('.slides > img');
    const currentSlide = allSlides[imageActive];
    //tolgo la classe active
    currentSlide.classList.remove('active');
    imageActive++;
    const nextSlide = allSlides[imageActive]
    //aggiungo la class active alla seconda 
    nextSlide.classList.add('active');
})

//click sul pulsante prev
prevEl.addEventListener('click', function(){
    console.log('hai cliccato prev');
    //selezione immagini
    const allSlides = document.querySelectorAll('.slides > img');
    const currentSlide = allSlides[imageActive];
    //tolgo la classe active
    currentSlide.classList.remove('active');
    imageActive--;
    const nextSlide = allSlides[imageActive]
    //aggiungo la class active alla seconda 
    nextSlide.classList.add('active');
})