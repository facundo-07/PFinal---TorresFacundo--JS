const submitBtn = document.querySelector('.submit-btn');
const resetBtn = document.querySelector('.reset-btn');
const list = document.querySelector("#list");
const toDoItem = document.querySelector("#to-do");
const addListBtn = document.querySelector(".add-button");
const addNoteBtn = document.querySelector(".add-note-btn");
const error = document.querySelector("#error1");
const notesPanel = document.querySelector(".notes-panel");
const newNote = document.querySelector("#note");
const noteTitle = document.querySelector("#note-title");
const titleError = document.querySelector("#title-error");
const noteError = document.querySelector("#note-error");
let welcomeMessage = document.querySelector(".welcome-message");
const errorName = document.querySelector("#error-name");
const today = new Date();
const day = today.getDay();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = today.getMonth();
let year = today.getFullYear();
let person = {firstName: "", lastName: ""};

const newBtn = document.querySelectorAll(".new-btn");
newBtn.forEach(newBtn => newBtn.style.display = 'none');

const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");

function abr(){
    if (day === 1 || day === 21 || day === 31){
        return "st"
    } else if(day === 2 || day === 22){
        return "nd"
    } else if(day === 3 || day === 23){
        return "rd"
    } else{
        return "th"
    };
}

function returnDate(){   
    const yearStrgn = new String(weekdays[day] + " - " + months[month] + " "  +  day + abr() + ", " + year);
    const addDate = document.createTextNode(yearStrgn);
    const h3 = document.createElement("h3");
    h3.className = "date";
    h3.appendChild(addDate);
    return h3
}    

submitBtn?.addEventListener('click', (e)=>{
    e.preventDefault();
    person.firstName = nameInput.value;
    person.lastName = surnameInput.value;
    let user = `${person.firstName} ${person.lastName}`
    const p = document.createElement("p");
    p.className = "greeting";
    const strgn = `Welcome, ${user}. Remember that you can edit your changes as you wish.`;
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
        newBtn.forEach(newBtn => newBtn.style.display = 'block');
    };   
});

addListBtn?.addEventListener('click', ()=>{
    const p = document.createElement('p');
    p.className = 'todo-paragraph'
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
    });    
});

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
        noteTitle.value = "";   
    };
});


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

resetBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    welcomeMessage.innerText = '';
    nameInput.value = '';
    surnameInput.value = '';
    nameInput.removeAttribute('disabled');
    surnameInput.removeAttribute('disabled');
    newBtn.forEach(newBtn => newBtn.style.display = "none");
    errorName.textContent = "";
});





//  Not in the final  product

function trial(){
    const p = document.createElement("p");
    p.className = "date";
    const d = new Date();
    const dd = d.getDay();
    const mm = d.getMonth() + 1;
    const yy = d.getFullYear();
    const addto = document.createTextNode(dd + "/" +  mm + "/" + yy);
    p.appendChild(addto);
    // console.log(addto)
    // list.appendChild(p)
}

trial()







// const products = [
//     {id: 1, product: "Iphone", price: 500},
//     {id: 2, product: "Mac", price: 800},
//     {id: 3, product: "Airpods", price: 300},
// ];

// products.push({id: 4, product: "Charger", price: 100})

// for (product of products){
//     const d = document.createElement("div");
//     d.innerHTML = `<h2>${product.product}<h2>
//                     <p>"$"${product.price}<p>
//                     <p>"ID:" ${product.id}`
//     document.body.appendChild(d)
// }







// const menuList = document.querySelector(".menu");
// menuList.style.display = 'none'

// function addMenuBtn(){
//     if (menuList.style.display == 'none'){
//         menuList.style.display = "block"
//     } else {
//         menuList.style.display = "none"
//     }

// }




// let torres = ['Gaston', 'Gisela', 'Facundo', 'Joaquín', 'Gonzalo']

// for (i=0; i<torres.length; i++){
//     console.log(torres[i])
// }

// console.log(torres.join('; '))

// for(let i = 10; i>=0; i--){
//     console.log(i)
// }

// const namesArray = [
//     {name: "Facundo", surname: "Torres", DNI: 40959932},
//     {name: "Valentina", surname: "Zanini", DNI: 36189746}
// ];

// for (const details of namesArray){
//     console.log(details.name, details.surname, details.DNI)
// }

// function greaterThan(n){
//     return (m) => m > n;
// }

// let greaterThanTwenty = greaterThan(20);
// console.log(greaterThanTwenty(10))
// console.log(greaterThanTwenty(30))




// function operations(op){
//     if (op == "sum"){
//         return (a, b) => a + b
//     } else if(op == "rest") {
//         return (a,b) => a - b
//     } else {
//         return (a, b) => "Not found"
//     }
// };

// let inputValue = prompt("Type the operation")

// let suma = operations(inputValue.toLowerCase())

// console.log(suma(4, 5))

// let resta = operations("rest")

// console.log(resta(3,8));





// function higherF(a){
//     console.log("Hi, " + a + ", and welcome to my world")
// }

// names = ["Gaston", "Gisela", "Joaquin", "Facundo", "Gonzalo"]

// function greeting(arr, fn){
//     for (const i of arr){
//         fn(i)
//     }
// }

// greeting(names, higherF)




// let hello = ["Hello.", "My name is Facundo.", "Thank you for reading this."]
// let greetingHello = document.getElementById("example")

// for (let t =0; t < hello.length; t++){
//     greetingHello.textContent += hello[t] + " "
// }





// const prod1 = {product: "mobile phone", id: 1, price: 300}
// const prod2 = {product: "tablet", id: 2, price: 300}
// const prod3 = {product: "airphones", id: 3, price: 100}
// const prod4 = {product: "smart tv", id: 4, price: 400}

// const products = [
//     prod1,
//     prod2,
//     prod3,
//     prod4,
// ]

// products.push({product: "fridge", id: 5, price: 500})

// console.log(products)

// products[2].price = 1000




// const myArray = [1, 2, 3, 4, 5]

// function facu(a){
//     console.log("I am number " + a)
// }

// function counting(arr, fn){
//     for (const i of arr){
//         fn(i)
//     }
// }

// counting(myArray, facu)




// const emptyArr = [];
// const numeros = [2, 4, 6, 8, 10];
// const fun = (el) => { emptyArr.push(el + 1) }


// counting(numeros, fun)

// console.log(numeros)
// console.log(emptyArr)

// numeros.forEach((num) => {console.log(num)});




// const courses = [
//     {name: "JS", price: 2000},
//     {name: "React", price: 3000},
//     {name: "HTML", price: 1000},
// ];

// const result = courses.find( (el) => el.price < 3000)
// const result1 = courses.find( (el) => el.price < 1500) //find method returns the first one with that condition within the array
// console.log(result)
// console.log(result1)

// const greaterThanTwo = courses.filter ((el) => el.price <= 2000)
// console.log("Courses cheaper than 2000: ")
// console.log(greaterThanTwo);

// const thousand = greaterThanTwo.find((el)=> el.price == 1000)
// console.log(thousand)

// const tryingMap = courses.map ((el) => el.name)
// for (const i of tryingMap){
//     console.log(i)
// }

// const pricesUpdated = courses.map ((el) => {
//     return {
//         name : el.name,
//         price : el.price * 1.1,
//         priceUpdate : true
//     }
// })


// console.log(pricesUpdate)






