const dropDown = document.querySelectorAll('.customDropdown').forEach(function (dropDownWrapper) {



    

    const dropDownBtn = dropDownWrapper.querySelector('.select');
  
    
    const dropDownList = dropDownWrapper.querySelector('.menu');
    const dropDownItem = dropDownList.querySelectorAll('.menu__item');
    const dropDownCaret = dropDownWrapper.querySelector('.caret');
   
   
    

    dropDownBtn.addEventListener('click', function (){
        dropDownList.classList.toggle('menu-open');
        this.classList.toggle('select-clicked');
        dropDownCaret.classList.toggle('caret-rotate');
    })

    dropDownItem.forEach(function(listItem){
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
        })
    })




    document.addEventListener('click', function (e) {
    //   console.log('document click')
      const dropDownButtonText = dropDownBtn.querySelector('.selected')
      const dropDownCaretInner = dropDownBtn.querySelector('.material-icons-outlined')
      const dropDownClean = dropDownWrapper.querySelector('.menu__button-clean_active')
      if (e.target !== dropDownBtn & e.target !== dropDownButtonText & e.target !==  dropDownCaretInner & e.target !==  dropDownClean) {
        dropDownList.classList.remove('menu-open');
        dropDownBtn.classList.remove('select-clicked');
        dropDownCaret.classList.remove('caret-rotate');
      }
    })
          

    document.addEventListener('keydown', function (e) {
        
       if (e.key === 'Tab' || e.key === 'Escape') {
          dropDownList.classList.remove('menu-open');
          dropDownBtn.classList.remove('select-clicked');
          dropDownCaret.classList.remove('caret-rotate');

       }
    })
});