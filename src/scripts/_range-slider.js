const rangeSliderWrapper = document.querySelectorAll('.range-slider__form ').forEach((rangeSliderWrapper) => {


    const rangeInput = rangeSliderWrapper.querySelectorAll('.range-slider__range-input input') 
    const progressLine = rangeSliderWrapper.querySelector('.range-slider__line')
    const progress = progressLine.querySelector('.range-slider__progress')

    const priceInput = rangeSliderWrapper.querySelectorAll('.range-slider__input input')


    const priceGap = 1000;

    priceInput.forEach(input => {
        input.addEventListener('input', e => {
            let minVal = parseInt(rangeInput[0].value)
            let maxVal = parseInt(rangeInput[1].value)


            if (maxVal - minVal < priceGap) {
                if( e.target.className === range-slider__input-min) {
                    rangeInput[0].value  = minVal;
                    progress.style.left = (minVal/rangeInput[0].max) * 100 + '%';
                } else {
                    rangeInput[1].value  = maxVal;
                    progress.style.right = 100 - (maxVal/rangeInput[1].max) * 100 + '%';
                }
            } else {
                priceInput[0].value = minVal + "₽";
                priceInput[1].value = maxVal + "₽";
                
                
            }
        })
    })

    rangeInput.forEach(input => {
        input.addEventListener('input', e => {
            let minVal = parseInt(rangeInput[0].value)
            let maxVal = parseInt(rangeInput[1].value)


            if (maxVal - minVal < priceGap) {
                if( e.target.className === 'range-input__min') {
                    rangeInput[0].value  = maxVal - priceGap;
                } else {
                    rangeInput[1].value  = minVal + priceGap;
                }
            } else {
                priceInput[0].value = minVal + "₽";
                priceInput[1].value = maxVal + "₽";
                progress.style.left = (minVal/rangeInput[0].max) * 100 + '%';
                progress.style.right = 100 - (maxVal/rangeInput[1].max) * 100 + '%';
            }
        })
    })
})