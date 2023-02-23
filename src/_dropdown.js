const dropDown = document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {





    const dropDownBtn = dropDownWrapper.querySelector('.selected');
    const dropDownList = dropDownWrapper.querySelector('.menu');
    const dropDownItem = dropDownList.querySelectorAll('.menu__item');



    dropDownBtn.addEventListener('click', function (){
        dropDownList.classList.toggle('menu-open');
        this.classList.toggle('select-clicked')
    })

    dropDownItem.forEach(function(listItem){
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
        })
    })




    // document.addEventListener('click', function (e) {
    //     console.log('document click');
    //    if (e.target == dropDownBtn) {
    //        return
    //    } else {
    //     document.querySelector('.menu').classList.remove('menu-open');
    //     document.querySelector('.selected').classList.remove('select-clicked');
    //    }
    // })
    // windows.onclick = e => {
    //     if (e.target == dropDownBtn) {
    //                return
    //            } else {
    //             document.querySelector('.menu').classList.remove('menu-open');
    //             document.querySelector('.selected').classList.remove('select-clicked');
    //            

    document.addEventListener('keydown', function (e) {
       if (e.key === 'Tab' || e.key === 'Escape') {
          dropDownList.classList.remove('menu-open');
          dropDownBtn.classList.remove('select-clicked')

       }
    })
});
























// document.querySelectorAll('.dropdown').forEach(function (dropdownWrapper){



// const myDropdown = document.querySelectorAll(['.select']);

// myDropdown.forEach(dropdown => {
    
//     const select = document.querySelector('.select');
//     const caret = document.querySelector('.caret');
//     const menu = document.querySelector('.menu');
//     const options = document.querySelector('.menu li');
//     const selected = document.querySelector('.selected');
    
//     select.addEventListener('click', () => {
//         console.log('fuck')
//         select.classList.toggle('select-clicked');
//         caret.classList.toggle('caret-rotate');
//         menu.classList.toggle('menu-open');
//     });

//     options.forEach(option => {
//         option.addEventListener('click', () => {

//             selected.innerText = option.innerText;
//             select.classList.remove('select-cliked');
//             caret.classList.remove('caret-rotate');
//             menu.classList.remove('menu-open');

//             option.forEach(option => {
//                 option.classList.remove('active');
//             });
//             option.classList.add('active');

//         });
//     });

//     });
// });







document.querySelector('.selct').addEventListener('click', function (){
    document.querySelector('.menu').classList.add('menu-open');
})




