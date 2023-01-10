const submitBtn = document.querySelector('.submit-btn');
const resetBtn = document.querySelector('.reset-btn');
let welcomeMessage = document.querySelector(".welcome-message");
const errorName = document.querySelector("#error-name");
let person = {firstName: "", lastName: ""};
const newBtn = document.querySelectorAll(".new-btn");
newBtn.forEach(newBtn => newBtn.style.display = 'none');
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");

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

resetBtn?.addEventListener('click', (e)=>{
    e.preventDefault();
    welcomeMessage.innerText = '';
    nameInput.value = '';
    surnameInput.value = '';
    nameInput.removeAttribute('disabled');
    surnameInput.removeAttribute('disabled');
    newBtn.forEach(newBtn => newBtn.style.display = "none");
    errorName.textContent = "";
});






// A PARTIR DE ACA HAY EJEMPLOS QUE FUI HACIENDO PARA PROBAR FUNCIONALIDADES,
// NO TIENE NADA QUE VER CON EL PROYECTO



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






