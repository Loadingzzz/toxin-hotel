const calendarBox = document.querySelectorAll('.calendar__form').forEach(function(calendarWrapper){

    const currentDate = calendarWrapper.querySelector('.current-date');
    const daysTag = calendarWrapper.querySelector('.days');
    const arrow = calendarWrapper.querySelectorAll('.date-arrow')





    let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

    console.log(date, currYear, currMonth)
    console.log(currYear)
    console.log(currMonth)
    console.log(date.getDate())
    

    const months = ["Январь","Февраль","Март","Апрель",
                    "Май","Июнь","Июль","Август","Сентярь",
                    "Октябрь","Ноябрь","Декабрь" ]


    const renderCalendar = () => {
        let firstDayOfMonths = new Date(currYear,currMonth, 0).getDay();
        let firstDayOfMonths2 = new Date(currYear,currMonth, 0).getDay();
        
        
        let lastDateOfMonths = new Date(currYear,currMonth + 1, 0).getDate();
        let lastDateOfLastMonths = new Date(currYear,currMonth, 0).getDate();
        let lastDayOfMonths = new Date(currYear,currMonth,lastDateOfMonths).getDay();
        
        let liTag ="";

        for (let i = firstDayOfMonths; i > 0; i--) {
            liTag += `<li class="inactive">${lastDateOfLastMonths - i + 1}</li>`;
            
        }



        for (let i = 1; i <= lastDateOfMonths; i++) {
            let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                                            && currYear === new Date().getFullYear() ? "active" : "";
            
            liTag += `<li class="${isToday}" data-date="${date.toUTCString()}" >${i}</li>`;
        }

        for (let i = lastDayOfMonths; i < 7; i++) {
            liTag += `<li class="inactive">${i - lastDayOfMonths + 1}</li>`;
            
        }

        currentDate.innerHTML =`${months[currMonth]} ${currYear}`;
        daysTag.innerHTML = liTag;
        
    }

    renderCalendar();

    arrow.forEach(icon => {
        icon.addEventListener('click', () => {
            currMonth =icon.id === 'prev' ? currMonth -1 : currMonth + 1;


            if(currMonth < 0 || currMonth > 11){
                date = new Date(currYear,currMonth);
                currYear = date.getFullYear();
                currMonth = date.getMonth();

            } else {
                date = new Date(); 
            }
            renderCalendar();
        })  
    })


    const testDate = calendarWrapper.querySelectorAll('.days li')
    testDate.forEach(function(e){
        e.addEventListener('click', () =>{
            console.log('PRIVETUEBA')
            e.classList.add('startDate')   
        })
        e.addEventListener('click', () => {
            if(e.classList.contains === 'startDate') {
                console.log('DATASTARTANULA')
            }
        })
    })

})