//EN PROCESO PARA EL PROYECTO FINAL


const calendarDays = document.querySelector(".calendar-days");
const currentMonth = document.querySelector(".current-month");
const prevIcon = document.querySelector("#prev");
const nextIcon = document.querySelector("#next");
const date = new Date();
let month = date.getMonth()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// function renderCalendar(){
    
    
//     return month
// }


function changeMonth(){
    currentMonth.textContent = months[month];
    prevIcon.addEventListener('click', ()=>{
        month -= 1;
        currentMonth.textContent = months[month];
        if (month < 0){
            month = 11
        };
        currentMonth.textContent = months[month];
    });
    nextIcon.addEventListener('click', ()=>{
        month +=1;
        currentMonth.textContent = months[month];
        if (month > 11){
            month = 0
        };
        currentMonth.textContent = months[month];
    })
}

changeMonth()

// renderCalendar()

// function getAllDaysInMonth(year, month) {
//     const date = new Date(year, month, 1);
  
//     const dates = [];
  
//     while (date.getMonth() === month) {
//       dates.push(new Date(date));
//       date.setDate(date.getDate() + 1);
//     }
  
//     return dates;
//   }
  
//   const now = new Date();
  
//   // 👇️ all days of the current month
//   console.log(getAllDaysInMonth(now.getFullYear(), now.getMonth()));
  
//   const date = new Date('2022-03-24');
  
//   // 👇️ All days in March of 2022
//   console.log(getAllDaysInMonth(date.getFullYear(), date.getMonth()));