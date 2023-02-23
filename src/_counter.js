const globalCounter = document.querySelectorAll('.dropdown').forEach(function (counterWrapper) {




    const myCounter = counterWrapper.querySelectorAll(['.counter__button']);

    const counterOne = counterWrapper.querySelector('.counter__value-one');
    const counterTwo = counterWrapper.querySelector('.counter__value-two');
    const counterThree = counterWrapper.querySelector('.counter__value-three');
    const guestQuantity = counterWrapper.querySelector('.guestQuantity');
    const counterMenu = counterWrapper.querySelector('.menu__buttons');
    
    
      
            


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
      });
    });

    window.addEventListener('click', function (event) {
         
     if (event.target.hasAttribute('data-cart')) {
         console.log('Click')
         
         let innerTextOne = counterOne.innerText;
         let innerTextTwo = counterTwo.innerText;
         let innerTextThree = counterThree.innerText;
         let innerNumOne =  Number.parseInt(innerTextOne);
         let innerNumTwo =  Number.parseInt(innerTextTwo);
        let innerNumThree =  Number.parseInt(innerTextThree);
        
        getSum = innerNumOne+innerNumTwo+innerNumThree;
         console.log(getSum);

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

         
     };

      if(event.target.hasAttribute('data-clean')){

          const guestQuantity = counterWrapper.querySelector('.guestQuantity');

          counterOne.innerText = "0"
          counterTwo.innerText = "0"
          counterThree.innerText ="0"

          counterMenu.classList.remove('menu__buttons-rToClean');
          counterMenu.querySelector('.menu__button-clean').classList.remove('menu__button-clean_active');
          guestQuantity.innerText = "Сколько гостей"

      };
      });

    });






