const list = document.querySelector("#list");
const toDoItem = document.querySelector("#to-do");
const error = document.querySelector("#error1");
const notesPanel = document.querySelector(".notes-panel");
const newNote = document.querySelector("#note");
const noteTitle = document.querySelector("#note-title");
const titleError = document.querySelector("#title-error");
const noteError = document.querySelector("#note-error");
const edit = document.querySelector(".edit");
let wasDone = true;
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
let person = {firstName: "", lastName: ""};
let welcomeMessage = document.querySelector(".welcome-message");
const errorName = document.querySelector("#error-name");

function submit(){
    const p = document.createElement("p");
    p.className = "greeting";
    person.firstName = nameInput.value;
    person.lastName = surnameInput.value;
    const strgn = "Welcome, " + person.firstName + " " + person.lastName + ". Remember that you can edit your changes as you wish.";
    const strgnToAdd = document.createTextNode(strgn)
    p.appendChild(strgnToAdd);
    if (person.firstName == "" || person.lastName == ""){
        errorName.textContent = "Please enter your name and surname"
    } else{
        welcomeMessage.appendChild(p);
        errorName.textContent = "";
        nameInput.value = '';
        surnameInput.value = '';
        nameInput.setAttribute('disabled', 'true');
        surnameInput.setAttribute('disabled', 'true');
    }
    console.log(person)
}

function addItem(){
    const p = document.createElement('p');
    p.className = 'todo-paragraph edit'
    const li = document.createElement("li");
    const inputValue = toDoItem.value;
    const t = document.createTextNode(inputValue);
    p.setAttribute("contenteditable", "true");
    p.appendChild(t);
    li.appendChild(p)
    li.appendChild(addDoneBtn());
    li.appendChild(addDeleteBtn());
    if (inputValue === ""){
        error.textContent = "Please write something";
    } else{ 
        list.appendChild(li);
        error.textContent = "";
        toDoItem.value= "";
    };  
    p.addEventListener ("click", (e) =>{
        const line = e.target.parentElement;
        line.style.textDecoration = "none";
    })
};

function addDeleteBtn(){
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.className = "delete";
    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        list.removeChild(item);
    });
    return deleteBtn;
};

function addDoneBtn(){
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "✓";
    doneBtn.className = "done";
    doneBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        item.style.textDecoration = 'line-through';
    });
    return doneBtn
};

function addNote(){
    const div = document.createElement("div");
    div.className = "div-note";
    const h2 = document.createElement("h2");
    h2.setAttribute("contenteditable", "true");
    const p = document.createElement("p");
    p.className = "note-paragraph edit";
    p.setAttribute("contenteditable", "true");
    const inputValue = newNote.value;
    const inputTitle = noteTitle.value;
    const h = document.createTextNode(inputTitle);
    const t = document.createTextNode(inputValue);
    h2.appendChild(h);
    p.appendChild(t);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(deleteNote())
    if (inputValue === ""){
        noteError.textContent = "Please write something";
    } else if (inputTitle === ""){ 
        titleError.textContent = "Please write something";
    } else{
        notesPanel.appendChild(div);
        titleError.textContent = "";
        noteError.textContent = "";
        newNote.value = "";
        noteTitle.value = ""
    };
    
};

function deleteNote(){
    const deleteNoteBtn = document.createElement("button");
    deleteNoteBtn.textContent = "Delete";
    deleteNoteBtn.className = "delete-note";
    deleteNoteBtn.addEventListener ("click", (e) => {
        const item = e.target.parentElement;
        notesPanel.removeChild(item);
    })
    return deleteNoteBtn
};


function reset(){
    toDoItem.value = '';
    list.innerHTML = '';
    notesPanel.innerHTML = '';
    newNote.value = '';
    noteTitle.value = '';
    welcomeMessage.innerHTML = '';
    nameInput.value = '';
    surnameInput.value = '';
    nameInput.removeAttribute('disabled');
    surnameInput.removeAttribute('disabled');
};