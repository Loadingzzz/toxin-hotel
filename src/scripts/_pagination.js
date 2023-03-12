let thisPage = 1;

let limit = 12;

let list = document.querySelectorAll('.pagination__card');

function loadItem () {
    let beginGet = limit * (thisPage-1);
    let endGet = limit * thisPage -1;
    list.forEach((item,key) => {
        if(key >= beginGet && key <= endGet) {
            item.style.display = 'block';   
        } else {
            item.style.display = 'none';
        }
    })
    // listPage()
}

loadItem()
// function listPage() {
//     let count = Math.ceil(list.lenght / limit);
//     document.querySelector('.pagination__list').innerHTML = "";
//     for (i = 1 ; i <= count ; i++) {
//         let newPage = document.createElement('li')
//         newPage.innerText = i;
//         newPage.classList.add('pagination__item')
//         if(i == thisPage) {
//             newPage.classList.add('active-page')
//         }
//         newPage.setAttribute('onclick',"changePage("+ i +")")
//         document.querySelector('.pagination__list').appendChild(newPage)
//     } 
// }



   //     document.querySelector('.pagination__list').innerHTML = "";

//     if(thisPage != 1) {
//         let prev = document.createElement(`<li class="pagination__item"></li>`);
//         prev.inner = "prev"
//         prev.setAttribute('onclick',"changePage("+ ((thisPage) - 1) +")")
//         document.querySelector('.pagination__list').appendChild(prev)
//     }








//     if (thisPage != count ) {
//         let next = document.createElement('li');
//         next.innerText = "next";
//         next.setAttribute('onclick',"changePage("+ ((thisPage) + 1) +")")
//         document.querySelector('.pagination__list').appendChild(next)
//     }
// }

// function changePage (i) {
//     thisPage = i;
//     loadItem();
// }


