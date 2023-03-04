const globalCounter = document.querySelectorAll('.customDropdown').forEach(function (counterWrapper) {






    const myCounter = counterWrapper.querySelectorAll(['.counter__button']);

    

    const counterBtnMinusOne = counterWrapper.querySelector('.counter__button-minus-one');
    const counterBtnMinusTwo = counterWrapper.querySelector('.counter__button-minus-two');
    const counterBtnMinusThree = counterWrapper.querySelector('.counter__button-minus-three');

    const counterInnerApply = counterWrapper.querySelector('.menu__button-apply');
    const counterInnerClean = counterWrapper.querySelector('.menu__button-clean');

    const counterOne = counterWrapper.querySelector('.counter__value-one');
    const counterTwo = counterWrapper.querySelector('.counter__value-two');
    const counterThree = counterWrapper.querySelector('.counter__value-three');
    const guestQuantity = counterWrapper.querySelector('.guestQuantity');
    const counterMenu = counterWrapper.querySelector('.menu__buttons');
    
    const dropDownList = counterWrapper.querySelector('.menu');
    const dropDowmTittleInnerOne = dropDownList.querySelector('.dropdown__item__title-one');
    const dropDowmTittleInnerTwo = dropDownList.querySelector('.dropdown__item__title-two');
    const dropDowmTittleInnerThree = dropDownList.querySelector('.dropdown__item__title-three');
    const dropDownListItem = dropDownList.querySelector('.menu__item');
    const counterButtonPlusOne = dropDownList.querySelector('.counter__button-plus-one');
    const counterButtonPlusTwo = dropDownList.querySelector('.counter__button-plus-two');
    const counterButtonPlusThree = dropDownList.querySelector('.counter__button-plus-three');


      
            


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


    counterButtonPlusOne.addEventListener('click', function (){
        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        









        if (innerNumOne>1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

    
        if (innerNumTwo>1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }
        
        if (innerNumThree>1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }





        if (innerNumOne>1 && innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 && innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>1 && innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }





        if (innerNumOne>=1 && innerNumTwo>=1 &&  innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 && innerNumTwo<1 && innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }




        if (innerNumOne< 2 && innerNumOne>0 ) {
            guestQuantity.innerHTML = innerNumOne + " спальня";
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo < 2 && innerNumTwo > 0 ) {
            guestQuantity.innerHTML = innerNumTwo + " кровать";
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree < 2 && innerNumThree > 0 ) {
            guestQuantity.innerHTML = innerNumThree + " ванная комната";
            guestQuantity.classList.add('dropdown__item__title-apply');
        }




        
    })
    counterButtonPlusTwo.addEventListener('click', function (){
        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        if (innerNumOne>=1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 & innerNumTwo<1 & innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }
    })
    counterButtonPlusThree.addEventListener('click', function (){
        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        if (innerNumOne>=1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 & innerNumTwo<1 & innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }
    });

    counterBtnMinusOne.addEventListener('click', function (){
        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        if (innerNumOne>=1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }


        if (innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 & innerNumTwo<1 & innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }
    })
    counterBtnMinusTwo.addEventListener('click', function (){
        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        if (innerNumOne>=1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 & innerNumTwo<1 & innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }
    })
    counterBtnMinusThree.addEventListener('click', function (){
        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        if (innerNumOne>=1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 & innerNumTwo<1 & innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }
    });



    counterInnerApply.addEventListener('click', function(){


        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        if (innerNumOne>=1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 & innerNumTwo<1 & innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }    
    });

    counterInnerClean.addEventListener('click', function() {
        const guestQuantity = counterWrapper.querySelector('.guestQuantity');

        counterOne.innerText = "0"
        counterTwo.innerText = "0"
        counterThree.innerText ="0"

        counterMenu.classList.remove('menu__buttons-rToClean');
        counterMenu.querySelector('.menu__button-clean').classList.remove('menu__button-clean_active');
        guestQuantity.innerText = "Сколько гостей"
    });

    });






