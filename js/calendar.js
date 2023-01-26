let calendarArray = []

class calendarStorage{
    constructor(id, title, start, end){
        this.title = id;
        this.title = title;
        this.start = start;
        this.end = end;
        // this.startTime = startTime;
        // this.finishTime = finishTime;
    }
};

const calendarLayOut = ()=>{
    const calendarEl = document.querySelector('#calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today addEventButton',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        customButtons: {
            addEventButton: {
                text: 'add event...',
                click: function() {
                    Swal.fire({
                        title: 'Add Event',
                        html:`<input type="text" name="name" class="swal2-input event-title" placeholder="Name" required>
                            <input type="date" name="date" class="swal2-input event-date required">
                            <input type="time" name="time" class="swal2-input start-time required">
                            <input type="time" name="duration" class="swal2-input finish-time required">HS
                            <p id="input-error"></p>`,
                        confirmButtonText: 'Save',
                        }).then((result)=>{
                            const eventTitle = document.querySelector(".event-title").value;
                            const eventDate = document.querySelector(".event-date").value;
                            const eventStarts = document.querySelector(".start-time").value;
                            const eventFinishes = document.querySelector(".finish-time").value;
                            const inputError = document.querySelector("#input-error");
                            const dateStart  = new Date(eventDate + `T${eventStarts}:00`);
                            const dateFinish  = new Date(eventDate + `T${eventFinishes}:00`);

                            if (!isNaN(eventStarts) || !isNaN(eventFinishes)) {
                                Swal.fire({
                                    title: "Please fill in the required information"
                                })
                            } else {
                                calendar.addEvent({
                                    id: eventTitle,
                                    title: eventTitle,
                                    start: dateStart,
                                    end: dateFinish,
                                    allDay: false,
                                    editable: true,
                                    displayEventTime: true,
                                });     
                                let newEvent = new calendarStorage(eventTitle, eventTitle, dateStart, dateFinish);
                                calendarArray.push(newEvent);
                                console.log(dateFinish);
                                localStorage.setItem("CALENDAR", JSON.stringify(calendarArray));
                                calendarArray = getList;
                            };
                        })            
                }
            }
        }
    });
    const getList = JSON.parse(localStorage.getItem("CALENDAR"));
    
    calendar.render();
    if (getList != null){
        for (i of getList){
            calendar.addEvent({
                id: i.title,
                title: i.title,
                start: i.start,
                end: i.end,
                allDay: false,
                editable: true,
                displayEventTime: true,
            });     
        }
    };

    calendarArray = getList;
};


document.addEventListener('DOMContentLoaded', calendarLayOut);

