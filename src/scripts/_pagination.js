const paginationWrapper = document.querySelectorAll('.pagination__wrapper').forEach((paginationWrapper) => { 

    let thisPage = 1;
    let limit = 12;
    let list = paginationWrapper.querySelectorAll('.pagination__card');
 


    // const nextPage = paginationWrapper.querySelector('.pagination__btn');
    const pages = paginationWrapper.querySelector('.pagination__list ')
    const pagesArray = Array.from(pages.children)
    const page = pages.querySelectorAll('.pagination__item')


    

    function pageClicker() {
        const pages = paginationWrapper.querySelector('.pagination__list ')
        const page = pages.querySelectorAll('.pagination__item')
        
        page.forEach((page)=> {
            page.addEventListener('click',()=>{
                i = page.dataset.index;
                thisPage = i;
                loadItem()
                page.classList.toggle('active-page')
                // page.classList.toggle('active-page')
                
            })
        })
    };



    




    list.forEach((item,index) => {
        item.dataset.index = index;
    })

    function loadItem () {

        let beginGet = limit * (thisPage-1);
        let endGet = limit * thisPage -1;

        list.forEach((item,key,index) => {
            if(item.dataset.index >= beginGet && item.dataset.index <= endGet) {
                item.style.display = 'block';   
            } else {
                item.style.display = 'none';
            }
            
        });
        listPage ()
    };


    loadItem()

    function listPage () {
            let count = Math.ceil(list.length/limit)
            paginationWrapper.querySelector('.pagination__list ').innerHTML="";

            if (thisPage != 1) {
                let prev = document.createElement('li')
                prev.innerHTML = 'arrow_back'
                paginationWrapper.querySelector('.pagination__list ').appendChild(prev)
                prev.classList.add('material-symbols-outlined')
                prev.classList.add('pagination__btn')
            }

            for (i=1;i<=count;i++) {
                let newPage = document.createElement('li');
                newPage.classList.add('pagination__item')
                newPage.innerHTML = i;
                if (i === thisPage) {
                    newPage.classList.add('active-page');
                }
                
                newPage.setAttribute("data-index", i);
                paginationWrapper.querySelector('.pagination__list ').appendChild(newPage)
                pageClicker()
            }
            if (thisPage != count) {
                let next = document.createElement('li')
                next.innerHTML = 'arrow_forward'
                paginationWrapper.querySelector('.pagination__list ').appendChild(next)
                next.classList.add('material-symbols-outlined')
                next.classList.add('pagination__btn')
                next.classList.add('next__page')
        }
        


  };



    
    
    


});
