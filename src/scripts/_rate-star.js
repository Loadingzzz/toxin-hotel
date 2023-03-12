const rateStarWrapper = document.querySelectorAll('.rate-star__form').forEach((rateStarWrapper) => {


    const rateStar = rateStarWrapper.querySelector('.rate-star__inner');
    const starOne = rateStar.querySelector('.star1')
    const starTwo = rateStar.querySelector('.star2')
    const starThree = rateStar.querySelector('.star3')
    const starFour = rateStar.querySelector('.star4')
    const starFive = rateStar.querySelector('.star5')

    starOne.addEventListener('click', () => {
        starOne.classList.toggle('material-icons-outlined')
        starOne.classList.toggle('material-symbols-outlined')

        starTwo.classList.remove('material-symbols-outlined')
        starThree.classList.remove('material-symbols-outlined')
        starFour.classList.remove('material-symbols-outlined')
        starFive.classList.remove('material-symbols-outlined')

        starTwo.classList.add('material-icons-outlined')
        starThree.classList.add('material-icons-outlined')
        starFour.classList.add('material-icons-outlined')
        starFive.classList.add('material-icons-outlined')
    });

    starTwo.addEventListener('click', () => {
        starOne.classList.remove('material-icons-outlined')
        starOne.classList.add('material-symbols-outlined')

        starTwo.classList.remove('material-icons-outlined')
        starTwo.classList.add('material-symbols-outlined')

        starThree.classList.remove('material-symbols-outlined')
        starFour.classList.remove('material-symbols-outlined')
        starFive.classList.remove('material-symbols-outlined')

        starThree.classList.add('material-icons-outlined')
        starFour.classList.add('material-icons-outlined')
        starFive.classList.add('material-icons-outlined')
    });

    starThree.addEventListener('click', () => {
        starOne.classList.remove('material-icons-outlined')
        starOne.classList.add('material-symbols-outlined')

        starTwo.classList.remove('material-icons-outlined')
        starTwo.classList.add('material-symbols-outlined')

        starThree.classList.remove('material-icons-outlined')
        starThree.classList.add('material-symbols-outlined')

        starFour.classList.remove('material-symbols-outlined')
        starFive.classList.remove('material-symbols-outlined')

        starFour.classList.add('material-icons-outlined')
        starFive.classList.add('material-icons-outlined')

    });
    starFour.addEventListener('click', () => {
        starOne.classList.remove('material-icons-outlined')
        starOne.classList.add('material-symbols-outlined')

        starTwo.classList.remove('material-icons-outlined')
        starTwo.classList.add('material-symbols-outlined')

        starThree.classList.remove('material-icons-outlined')
        starThree.classList.add('material-symbols-outlined')

        starFour.classList.remove('material-icons-outlined')
        starFour.classList.add('material-symbols-outlined')

        starFive.classList.remove('material-symbols-outlined')

        starFive.classList.add('material-icons-outlined')
    });
    starFive.addEventListener('click', () => {
        starOne.classList.remove('material-icons-outlined')
        starOne.classList.add('material-symbols-outlined')

        starTwo.classList.remove('material-icons-outlined')
        starTwo.classList.add('material-symbols-outlined')

        starThree.classList.remove('material-icons-outlined')
        starThree.classList.add('material-symbols-outlined')

        starFour.classList.remove('material-icons-outlined')
        starFour.classList.add('material-symbols-outlined')

        starFive.classList.remove('material-icons-outlined')
        starFive.classList.add('material-symbols-outlined') 
    });
});