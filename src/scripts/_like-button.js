
const likeBox = document.querySelectorAll('.like__box').forEach(function (likeButtonWrapper) {


    
    const likeForm = likeButtonWrapper.querySelector('.like__form');
    const likeHeart = likeForm.querySelector('.like__form-heart');
    const likeCounter = likeForm.querySelector('.like__form-number');

    const likeCounterInner = +likeCounter.innerHTML


    likeForm.addEventListener ('click' , function (e) {
        console.log('CAZUS')
        console.log(likeCounterInner)
        let newCounter
        
        if (likeHeart.classList.contains('material-icons-outlined')) {
            newCounter = likeCounterInner +1
            likeCounter.innerHTML = newCounter
        } else {
            newCounter = likeCounterInner 
            likeCounter.innerHTML = newCounter
        }

        likeForm.classList.toggle('like__form-liked');
        likeHeart.classList.toggle('like__form-heart-liked')
        likeCounter.classList.toggle('like__form-number-liked')

        if (likeHeart.classList.contains('material-icons-outlined')) {
            likeHeart.classList.remove('material-icons-outlined')
            likeHeart.classList.toggle('material-symbols-outlined')
        } else {
            likeHeart.classList.remove('material-symbols-outlined')
            likeHeart.classList.add('material-icons-outlined')
        }
    })    
})