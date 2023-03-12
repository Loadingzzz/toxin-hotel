const sliderWrapper = document.querySelectorAll('.slider__form').forEach((sliderWrapper) => {



    const slider = sliderWrapper.querySelector('.slider');
    const sliderItems = Array.from(slider.children);
    const sliderBtnPrev = sliderWrapper.querySelector('.prev')
    const sliderBtnNext = sliderWrapper.querySelector('.next')
    const sliderDots = sliderWrapper.querySelector('.slider__dot')
    const sliderDotsItem = Array.from(sliderDots.children)

    sliderDotsItem.forEach((dot,index) => {
        
        dot.dataset.index = index;

        sliderDotsItem[0].setAttribute('data-active','') 

        sliderDots.addEventListener('click', () => {
            
            dot.removeAttribute('data-active')
        
        
            let nextDotIndex;
        
            if (index + 1 === sliderDotsItem.length) {
                nextDotIndex = 0;
            } else {
                nextDotIndex + 1; 
            }
            console.log()
        
            const nextDot = sliderDots.querySelector(`[data-index="${index+1}"]`)
            // nextDot.classList.add('dot-active')
            // nextDot.setAttribute('data-active','')
        })  
    });






    sliderItems.forEach( (slide, index) => {

        if (index !== 0) {
            slide.classList.add('slide-hidden');
        }
        
        slide.dataset.index = index; 

        sliderItems[0].setAttribute('data-active','');

        slide.addEventListener('click', () => {
        
            slide.classList.add('slide-hidden');
            slide.removeAttribute('data-active')
            
            let nextSlideIndex;  

            if (index + 1 === sliderItems.length) {   // то же самое тернарным оператором  
                nextSlideIndex = 0;                 //let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1; 
            } else {
                nextSlideIndex = index + 1;
            }

            // console.log(nextSlideIndex)
            
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
















    function helperFunction (direction) {

        const currentSlide = slider.querySelector('[data-active]')
        const currentSlideIndex = +currentSlide.dataset.index;
        currentSlide.classList.add('slide-hidden')
        currentSlide.removeAttribute('data-active')

    
        // const currentDot = sliderDots.querySelector('[data-active]')
        // const currentDotIndex = +currentDot.dataset.index;
        // currentDot.classList.remove('dot-active')
        
        

        // let nextDotIndex
        // nextDotIndex = currentDotIndex + 1;
        
        let nextSlideIndex;  
        if (direction === 'next') {
            nextSlideIndex = currentSlideIndex +1 === sliderItems.length ? 0 : currentSlideIndex + 1;
        }

        if (direction === 'prev') {
            nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
        }

        // if (+currentDot.dataset.index === nextSlideIndex) {
        //     currentDot.classList.add('dot-active')
            
        // } else {
        //     currentDot.classList.remove('dot-active')
            
        // }

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove('slide-hidden');
        nextSlide.setAttribute('data-active','')
        
        
    }

})


