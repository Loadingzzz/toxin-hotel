const checkBoxGlobal = document.querySelectorAll('.expanded__checkbox').forEach(function (checkBoxWrapper) { 

    const checkBox = checkBoxWrapper.querySelector('.expanded__checkbox___top');
    const checkBoxMenu = checkBoxWrapper.querySelector('.expanded__checkbox__menu')
    const checkBoxCaret = checkBoxWrapper.querySelector('.expanded__checkbox__caret')
    const checkBoxTitle = checkBox.querySelector('.expanded__checkbox___title')
    const checkBoxItem = checkBoxMenu.querySelectorAll('.expanded__checkbox__item')

    checkBox.addEventListener('click', function(){
        console.log('ETO On')
        checkBoxMenu.classList.toggle('expanded__checkbox__menu-open');
        checkBoxCaret.classList.toggle('expanded__checkbox__caret-rotate')
    });



    checkBoxItem.forEach(function(checkboxItem){
        checkBoxItem.addEventListener('click', function(e){
            e.stopPropagation();
        })
    });




    document.addEventListener('click', function (e){
        if(e.target !== checkBoxCaret & e.target !== checkBoxTitle ){
            checkBoxMenu.classList.remove('expanded__checkbox__menu-open');
            checkBoxCaret.classList.remove('expanded__checkbox__caret-rotate')
        }
    });
});
