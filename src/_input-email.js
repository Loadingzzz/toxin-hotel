
const inputEmailLine = document.querySelector('.form__input-email')
const inputInner = inputEmailLine.value;

inputEmailLine.addEventListener('click', () => {
    inputInner = 'test';
    console.log(Test);
})

console.log('inputInner');

