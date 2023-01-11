const list = document.querySelector("#list");
const toDoItem = document.querySelector("#to-do");
const addListBtn = document.querySelector(".add-button");
const error = document.querySelector("#error1");

// Usando el local storage para que cuando el usuario salga de la pantalla y lo vuelva a cargar siga estando su informacion del to-do list

const saveLocal = (y, x) => {localStorage.setItem(y,x)};

let toDoArray = [];

addListBtn?.addEventListener('click', ()=>{
    const inputValue = toDoItem.value;
    if (inputValue === ""){
        error.textContent = "Please write something";
    } else{
        toDoArray.push(inputValue)
        saveLocal("TO-DO-LIST", JSON.stringify(toDoArray));
        const p = document.createElement('p');
        p.className = 'todo-paragraph'
        const li = document.createElement("li");
        const t = document.createTextNode(inputValue);
        p.setAttribute("contenteditable", "true");
        p.appendChild(t);
        li.appendChild(p)
        li.appendChild(addDoneBtn());
        li.appendChild(addDeleteBtn());
        list.appendChild(li);
        error.textContent = "";
        toDoItem.value= "";  
        p.addEventListener ("click", (e) =>{
            const line = e.target.parentElement;
            line.style.textDecoration = "none";
        });    
    };  
});


function addDeleteBtn(){
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.className = "delete";
    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        list.removeChild(item);
        const getList = JSON.parse(localStorage.getItem("TO-DO-LIST"));
        const found = getList.find(element => element == item.firstChild.textContent);
        const index = getList.indexOf(found);
        getList.splice(index, 1);
        saveLocal("TO-DO-LIST", JSON.stringify(getList));
        toDoArray = getList;
    });
    return deleteBtn;
}

//Cada vez que el usuario carga la pantalla, se obtiene los items del local storage

window.addEventListener("load", ()=>{
    const getList = JSON.parse(localStorage.getItem("TO-DO-LIST"));
    if (getList != null){
        for (i of getList){
            const p = document.createElement('p');
            p.className = 'todo-paragraph'
            const li = document.createElement("li");
            const t = document.createTextNode(i);
            p.setAttribute("contenteditable", "true");
            p.appendChild(t);
            li.appendChild(p)
            li.appendChild(addDoneBtn());
            li.appendChild(addDeleteBtn());
            list.appendChild(li);
            error.textContent = "";
            toDoItem.value= "";  
            p.addEventListener ("click", (e) =>{
                const line = e.target.parentElement;
                line.style.textDecoration = "none";
            });
        };
        toDoArray = getList;
    }
    
});


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