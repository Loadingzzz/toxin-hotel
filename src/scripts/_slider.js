const slider = document.querySelector('.slider');
const sliderItems = Array.from(slider.children);
const sliderBtnPrev = document.querySelector('.prev')
const sliderBtnNext = document.querySelector('.next')
const sliderDots = document.querySelector('.slider__dot')
const sliderDotsItem = Array.from(sliderDots.children)
console.log(sliderDotsItem)

sliderItems.forEach( (slide, index) => {

    if (index !== 0) {
        slide.classList.add('slide-hidden');
    }

    slide.dataset.index = index; 

    sliderItems[0].setAttribute('data-active','');

    slide.addEventListener('click', () => {
        console.log('next')
        slide.classList.add('slide-hidden');
        slide.removeAttribute('data-active')


        let nextSlideIndex;  

        if (index + 1 === sliderItems.length) {   // то же самое тернарным оператором  
            nextSlideIndex = 0;                 //let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1; 
        } else {
            nextSlideIndex = index + 1;
        }

        console.log(nextSlideIndex)
        
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`); 

        nextSlide.classList.remove('slide-hidden');
        nextSlide.setAttribute('data-active','')     
    });
});

sliderBtnNext.addEventListener('click', () => {
    helperFunction ('next')
});

sliderBtnPrev.addEventListener('click', () => {
    helperFunction ('prev')
});

sliderDotsItem.forEach((dot, index) => {

    dot.dataset.index = index;

    const slide = slider.querySelector('[data-index]')

    const slideIndex = slide.dataset.index;

    console.log(slideIndex)

    if (dot.dataset.index === slideIndex) {
        dot.classList.add('dot-active')
    } else { 
        dot.classList.remove('dot-active')
    }
    
});


function helperFunction (direction) {

    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('slide-hidden')
    currentSlide.removeAttribute('data-active')

    let nextSlideIndex;  
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex +1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    }

    if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('slide-hidden');
    nextSlide.setAttribute('data-active','')  
}




