const myDropdown = document.querySelectorAll('.dropdown');

myDropdown.forEach(dropdown => {

    const select = document.querySelector('.select');
    const caret = document.querySelector('.caret');
    const menu = document.querySelector('.menu');
    const options = document.querySelector('.menu li');
    const selected = document.querySelector('.selected');
    
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {

            selected.innerText = option.innerText;
            select.classList.remove('select-cliked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            option.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');

        });
    });

});