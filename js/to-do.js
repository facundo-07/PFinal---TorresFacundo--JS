const list = document.querySelector("#list");
const toDoItem = document.querySelector("#to-do");
const addListBtn = document.querySelector(".add-button");
const error = document.querySelector("#error1");

const priority = ()=>{
    priorityValue = document.getElementById("priority").selectedIndex
    return priorityValue
}

const saveLocal = (y, x) => {localStorage.setItem(y,x)};

let toDoArray = [];

const addDoneBtn = ()=>{
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "✓";
    doneBtn.className = "done";
    doneBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        item.style.textDecoration = 'line-through';
        const toCross = item.querySelector(':nth-child(1)').textContent;
        const getList = JSON.parse(localStorage.getItem("TO-DO-LIST"));
        for (i of getList){
            const itemSearch = i.item;
            if (itemSearch === toCross){
                i.done = true;
            };
        };
        saveLocal("TO-DO-LIST", JSON.stringify(getList));
        toDoArray = getList;
    });
    return doneBtn
};

const addDeleteBtn = ()=>{
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.className = "delete";
    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        list.removeChild(item);
        const getList = JSON.parse(localStorage.getItem("TO-DO-LIST"));
        const toDelete = item.querySelector(':nth-child(1)').textContent;
        for (i of getList){
            const itemSearch = i.item;
            if (itemSearch === toDelete){
                const index = getList.indexOf(i);
                getList.splice(index, 1);
            };
        }
        saveLocal("TO-DO-LIST", JSON.stringify(getList));
        toDoArray = getList;
    });
    return deleteBtn;
};

const addList = ()=>{
    const inputValue = toDoItem.value;
    if (inputValue === ""){
        error.textContent = "Please write something";
    } else if (priority() === 0){
        error.textContent = "Please select the item priority";
    } else{
        toDoArray.push({priority: priority(), item: inputValue, done: false})
        console.log(toDoArray)
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
        if (priority() === 1){
            li.className = 'priority-high'
        } else if (priority() === 2){
            li.className = 'priority-medium'
        } else if (priority() === 3){
            li.className = 'priority-low'
        };
    };  
};

addListBtn?.addEventListener('click', addList);

//Cada vez que el usuario carga la pantalla, se obtiene los items del local storage

const windowLoadList = ()=>{
    const getList = JSON.parse(localStorage.getItem("TO-DO-LIST"));
    if (getList != null){
        for (i of getList){
            const p = document.createElement('p');
            p.className = 'todo-paragraph'
            const li = document.createElement("li");
            const t = document.createTextNode(i.item);
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
            if (i.priority === 1){
                li.className = 'priority-high'
            } else if (i.priority === 2){
                li.className = 'priority-medium'
            } else if (i.priority === 3){
                li.className = 'priority-low'
            };

            if(i.done === true){
                p.style.textDecoration = 'line-through';
            };
            
        };   
        toDoArray = getList;
    };
};

window.addEventListener("load", windowLoadList);
