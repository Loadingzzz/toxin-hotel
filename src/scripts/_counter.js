const globalCounter = document.querySelectorAll('.dropdown').forEach(function (counterWrapper) {






    const myCounter = counterWrapper.querySelectorAll(['.counter__button']);

    const counterBtnMinusOne = counterWrapper.querySelector('.counter__button-minus-one');
    const counterBtnMinusTwo = counterWrapper.querySelector('.counter__button-minus-two');
    const counterBtnMinusThree = counterWrapper.querySelector('.counter__button-minus-three');

    const counterInnerApply = counterWrapper.querySelector('.menu__button-apply');
    console.log(counterInnerApply);
    const counterInnerClean = counterWrapper.querySelector('.menu__button-clean');
    console.log(counterInnerClean);


    const counterOne = counterWrapper.querySelector('.counter__value-one');
    const counterTwo = counterWrapper.querySelector('.counter__value-two');
    const counterThree = counterWrapper.querySelector('.counter__value-three');
    const guestQuantity = counterWrapper.querySelector('.guestQuantity');
    const counterMenu = counterWrapper.querySelector('.menu__buttons');
    
    // const dropDownList = counterWrapper.querySelector('.menu');
    // const dropDowmTittleInnerOne = dropDownList.querySelector('.dropdown__item__title-one');
    // const dropDowmTittleInnerTwo = dropDownList.querySelector('.dropdown__item__title-two');
    // const dropDowmTittleInnerThree = dropDownList.querySelector('.dropdown__item__title-three');



      
            


    myCounter.forEach (btn => {
        btn.addEventListener('click', function(){
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter__value');
            const currentValue = +inp.innerText;
            let newValue;

          if (direction === 'plus') {
                newValue = currentValue +1;
               
           }
           else {
                newValue = currentValue -1 > 0 ? currentValue -1 : 0;

          }
          inp.innerText = newValue;

            let innerTextOne = +counterOne.innerText;
            let innerTextTwo = +counterTwo.innerText;
            let innerTextThree = +counterThree.innerText;

            if (innerTextOne>=1) {
                counterBtnMinusOne.classList.remove('counter__button-minus');
            } else {
                counterBtnMinusOne.classList.add('counter__button-minus');
            }
            if (innerTextTwo>=1) {
                counterBtnMinusTwo.classList.remove('counter__button-minus');
            } else {
                counterBtnMinusTwo.classList.add('counter__button-minus');
            }
            if (innerTextThree>=1) {
                counterBtnMinusThree.classList.remove('counter__button-minus');
            } else {
                counterBtnMinusThree.classList.add('counter__button-minus');
            }
            
            });
    });

    
    const activeMinusButton = () => {
        
        let innerTextOne = +counterOne.innerText;
        let innerTextTwo = +counterTwo.innerText;
        let innerTextThree = +counterThree.innerText;
    
        if (innerTextOne>=1) {
            counterBtnMinusOne.classList.toggle('counter__button-minus_active');
        } else {
            counterBtnMinusOne.classList.remove('counter__button-minus_active');
        };
        if (innerTextTwo>=1) {
            counterBtnMinusTwo.classList.toggle('counter__button-minus_active');
        } else {
            counterBtnMinusTwo.classList.remove('counter__button-minus_active');
        };
        if (innerTextThree>=1) {
            counterBtnMinusThree.classList.toggle('counter__button-minus_active');
        } else {
            counterBtnMinusThree.classList.remove('counter__button-minus_active');
        };
    }

    activeMinusButton();


    counterInnerApply.addEventListener('click', function(){
        let innerTextOne = +counterOne.innerText;
        let innerTextTwo = +counterTwo.innerText;
        let innerTextThree = +counterThree.innerText;
        
        
        getSum = innerTextOne+innerTextTwo+innerTextThree;

         if (getSum>=1) {
            guestQuantity.innerText = getSum + " гостя";
            counterMenu.classList.add('menu__buttons-rToClean');
            counterMenu.querySelector('.menu__button-clean').classList.add('menu__button-clean_active');
              
        }
        if (getSum>=5) {
            guestQuantity.innerText = getSum + " гостей";
        }
        if (getSum<=1) {
            guestQuantity.innerText = getSum +  " гость";
        }
        if (getSum<1) {
            guestQuantity.innerText = "Сколько гостей";
            counterMenu.classList.remove('menu__buttons-rToClean');
            counterMenu.querySelector('.menu__button-clean').classList.remove('menu__button-clean_active');
        }
    });

    counterInnerClean.addEventListener('click', function() {
        const guestQuantity = counterWrapper.querySelector('.guestQuantity');
        activeMinusButton();

        counterOne.innerText = "0"
        counterTwo.innerText = "0"
        counterThree.innerText ="0"

        if (counterOne.innerText<1) {
            counterBtnMinusOne.classList.add('counter__button-minus');
        }
        if (counterTwo.innerText<1) {
            counterBtnMinusTwo.classList.add('counter__button-minus');
        }
        if (counterThree.innerText<1) {
            counterBtnMinusThree.classList.add('counter__button-minus');
        }
        counterMenu.classList.remove('menu__buttons-rToClean');
        counterMenu.querySelector('.menu__button-clean').classList.remove('menu__button-clean_active');
        guestQuantity.innerText = "Сколько гостей"
    });

});






