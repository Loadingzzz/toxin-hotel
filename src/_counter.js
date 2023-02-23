
const myCounter = document.querySelectorAll(['.counter__button']);

myCounter.forEach (btn => {
    btn.addEventListener('click', function(){
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__value');
        const currentValue = +inp.value;
        let newValue;

        if (direction === 'plus') {
            newValue = currentValue +1;
        } else {
            newValue = currentValue -1 > 0 ? currentValue -1 : 0;
        }
        inp.value = newValue;
    });
});

myCounter.forEach (btn2 => {
    btn2.addEventListener('click', function(){
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__value');
        const currentValue = +inp.innerText;
        let newValue;

        if (direction === 'plus') {
            newValue = currentValue +1;
        } else {
            newValue = currentValue -1 > 0 ? currentValue -1 : 0;
        }
        inp.innerText = newValue;

    
    });
});

window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-cart')) {
        console.log('Click')

        const counterOne = document.querySelector('.counter-one');
        console.log(counterOne);
        const counterTwo = document.querySelector('.counter-two');
        console.log(counterTwo);
        const counterThree = document.querySelector('.counter-three');
        console.log(counterThree);
        const guestQuantity = this.document.querySelector ('.selcted');
        console.log(guestQuantity.textContent);

        let guestData;


    }
})






