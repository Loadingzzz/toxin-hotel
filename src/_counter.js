
const myCounter = document.querySelectorAll(['.counter__button']);

myCounter.forEach (btn2 => {
    btn2.addEventListener('click', function(){
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__value');
        const currentValue = +inp.innerText;
        let newValue;

        if (direction === 'plus') {
            newValue = currentValue +1;
            let ButtonBCOne = document.querySelector('.counter__button-minus-one');
            console.log(ButtonBCOne)
            // let ButtonBCTwo = document.querySelector('.counter__button-minus-two');
            // console.log(ButtonBCTwo)
            // let ButtonBCThree = document.querySelector('.counter__button-minus-three');
            // console.log(ButtonBCThree)
            ButtonBCOne.classList.remove('counter__button-minus');
        }
        else {
            newValue = currentValue -1 > 0 ? currentValue -1 : 0;
            
        }
        inp.innerText = newValue;
    });
});

window.addEventListener('click', function (event) {


    




    if (event.target.hasAttribute('data-cart')) {
        console.log('Click')

        const counterOne = document.querySelector('.counter__value-one');
        console.log(counterOne);
        const counterTwo = document.querySelector('.counter__value-two');
        console.log(counterTwo);
        const counterThree = document.querySelector('.counter__value-three');
        console.log(counterThree);
        const guestQuantity = document.querySelector('.guestQuantity');
        console.log(guestQuantity.innerText);

        

        let innerTextOne = counterOne.innerText;
        let innerTextTwo = counterTwo.innerText;
        let innerTextThree = counterThree.innerText;
        let innerNumOne =  Number.parseInt(innerTextOne);
        let innerNumTwo =  Number.parseInt(innerTextTwo);
        let innerNumThree =  Number.parseInt(innerTextThree);
        console.log(typeof(innerTextOne,innerTextTwo,innerTextThree))

        getSum = innerNumOne+innerNumTwo+innerNumThree;
        console.log(getSum);



        if (getSum>1) {
            guestQuantity.innerText = getSum + " гостя";
        }
        if (getSum>=5) {
            guestQuantity.innerText = getSum + " гостей";
        }
        if (getSum<=1) {
            guestQuantity.innerText = getSum +  " гость";
        }
        if (getSum<1) {
            guestQuantity.innerText = "Сколько гостей";
        }
    };

    if(event.target.hasAttribute('data-clean')){
        const guestQuantity = document.querySelector('.guestQuantity');
        console.log(guestQuantity.innerText);


        const counterOne = document.querySelector('.counter__value-one');
        console.log(counterOne);
        const counterTwo = document.querySelector('.counter__value-two');
        console.log(counterTwo);
        const counterThree = document.querySelector('.counter__value-three');
        console.log(counterThree);

        let innerTextOne = counterOne.innerText;
        let innerTextTwo = counterTwo.innerText;
        let innerTextThree = counterThree.innerText;

        counterOne.innerText = "0"
        counterTwo.innerText = "0"
        counterThree.innerText ="0"

        guestQuantity.innerText = "Сколько гостей"

    };
});






