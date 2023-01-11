const addNoteBtn = document.querySelector(".add-note-btn");
const error = document.querySelector("#error1");
const notesPanel = document.querySelector(".notes-panel");
const newNote = document.querySelector("#note");
const noteTitle = document.querySelector("#note-title");
const titleError = document.querySelector("#title-error");
const noteError = document.querySelector("#note-error");
const today = new Date();
const day = today.getDay();
const dateNumber = today.getDate();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = today.getMonth();
let year = today.getFullYear();

function abr(){
    if (dateNumber === 1 || dateNumber === 21 || dateNumber === 31){
        return "st"
    } else if(dateNumber === 2 || dateNumber === 22){
        return "nd"
    } else if(dateNumber === 3 || dateNumber === 23){
        return "rd"
    } else{
        return "th"
    };
};

function returnDate(){   
    const yearStrgn = new String(`${weekdays[day]} - ${months[month]} ${dateNumber}${abr()}, ${year}`);
    const addDate = document.createTextNode(yearStrgn);
    const h3 = document.createElement("h3");
    h3.className = "date";
    h3.appendChild(addDate);
    return h3
};

class notesStorage{
    constructor(date, title, note){
        this.date = date;
        this.title = title;
        this.note = note;
    }
};

let notesArray = [];

addNoteBtn?.addEventListener('click', ()=>{
    const div = document.createElement("div");
    div.className = "div-note";
    const h2 = document.createElement("h2");
    h2.setAttribute("contenteditable", "true");
    const p = document.createElement("p");
    p.className = "note-paragraph";
    p.setAttribute("contenteditable", "true");
    const inputValue = newNote.value;
    const inputTitle = noteTitle.value;
    const h = document.createTextNode(inputTitle);
    const t = document.createTextNode(inputValue);
    div.appendChild(returnDate())
    h2.appendChild(h);
    p.appendChild(t);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(deleteNote());
    if (inputValue === ""){
        noteError.textContent = "Please write something";
    } else if (inputTitle === ""){ 
        titleError.textContent = "Please write something";
    } else{
        notesPanel.appendChild(div);
        titleError.textContent = "";
        noteError.textContent = "";
        newNote.value = "";
        noteTitle.value = "";   
        let note = new notesStorage(returnDate().textContent, inputTitle, inputValue);      
        notesArray.push(note)
        localStorage.setItem("NOTES", JSON.stringify(notesArray));
    };
});


function deleteNote(){
    const deleteNoteBtn = document.createElement("button");
    deleteNoteBtn.textContent = "Delete";
    deleteNoteBtn.className = "delete-note";
    deleteNoteBtn.addEventListener ("click", (e) => {
        const item = e.target.parentElement;
        notesPanel.removeChild(item);
        const getList = JSON.parse(localStorage.getItem("NOTES"));
        const toDelete = item.querySelector(':nth-child(1) > :nth-child(2)');
        for (i of getList){
            if (i.title === toDelete.textContent){
                const index = getList.indexOf(i);
                getList.splice(index, 1)
            };
        };
        localStorage.setItem("NOTES", JSON.stringify(getList));
        notesArray = getList
    });
    return deleteNoteBtn
};


window.addEventListener("load", ()=>{
    const getList = JSON.parse(localStorage.getItem("NOTES"));
    if (getList != null){
        for (i of getList){
            const div = document.createElement("div");
            div.className = "div-note";
            const h2 = document.createElement("h2");
            h2.setAttribute("contenteditable", "true");
            const p = document.createElement("p");
            p.className = "note-paragraph";
            p.setAttribute("contenteditable", "true");
            const inputValue = newNote.value;
            const inputTitle = noteTitle.value;
            const h = document.createTextNode(i.title);
            const t = document.createTextNode(i.note);
            const h3 = document.createElement("h3");
            h3.className = "date";
            const date = document.createTextNode(i.date);
            h3.appendChild(date);
            div.appendChild(h3)
            h2.appendChild(h);
            p.appendChild(t);
            div.appendChild(h2);
            div.appendChild(p);
            div.appendChild(deleteNote());
            notesPanel.appendChild(div);
            titleError.textContent = "";
            noteError.textContent = "";
            newNote.value = "";
            noteTitle.value = "";   
            console.log(i.date)
        };   
        notesArray = getList;
    };
})


// window.addEventListener('click', ({x,y,type}) =>{
//     console.log(x,y,type)
// })