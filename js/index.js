const submitBtn = document.querySelector('.submit-btn');
const resetBtn = document.querySelector('.reset-btn');
let welcomeMessage = document.querySelector(".welcome-message");
const errorName = document.querySelector("#error-name");
let person = {firstName: "", lastName: ""};
const newBtn = document.querySelectorAll(".new-btn");
newBtn.forEach(newBtn => newBtn.style.display = 'none');
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");

class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

// setTimeout(() =>{
//     swal({
//         title: 'Welcome',
//         text: "",
//     })},2000)



const submitAction = (e) =>{
    e.preventDefault();
    person.firstName = nameInput.value;
    person.lastName = surnameInput.value;
    let user = `${person.firstName} ${person.lastName}`;
    const p = document.createElement("p");
    p.classList.add("greeting");
    const strgn = new String(`Welcome, ${user}. Remember that you can edit your changes as you wish.`);
    const strgnToAdd = document.createTextNode(strgn);
    p.appendChild(strgnToAdd);
    if (person.firstName == "" || person.lastName == ""){
        errorName.textContent = "Please enter your name and surname"
    } else{
        let newUser = new User(nameInput.value, surnameInput.value);
        localStorage.setItem("USER", JSON.stringify(newUser));
        welcomeMessage.appendChild(p);
        errorName.textContent = "";
        nameInput.value = '';
        surnameInput.value = '';
        nameInput.setAttribute('disabled', 'true');
        surnameInput.setAttribute('disabled', 'true');
        newBtn.forEach(newBtn => newBtn.style.display = 'block');
    };   
};

submitBtn.addEventListener('click', submitAction);

const windowLoad = () =>{
    if (localStorage.getItem("USER") != null){
        const userLocal = JSON.parse(localStorage.getItem("USER"));
        person.firstName = userLocal.firstName;
        person.lastName = userLocal.lastName;
        let user = `${person.firstName} ${person.lastName}`
        const p = document.createElement("p");
        p.classList.add("greeting");
        const strgn = `Welcome, ${user}. Remember that you can edit your changes as you wish.`;
        const strgnToAdd = document.createTextNode(strgn)
        p.appendChild(strgnToAdd);
        welcomeMessage.appendChild(p);
        errorName.textContent = "";
        nameInput.value = '';
        surnameInput.value = '';
        nameInput.setAttribute('disabled', 'true');
        surnameInput.setAttribute('disabled', 'true');
        newBtn.forEach(newBtn => newBtn.style.display = 'block');
    };
}

window.addEventListener('load', windowLoad);

const resetAction = (e)=>{
    e.preventDefault();
    swal({
        title: 'Are you sure?',
        text: "Your data will be lost",
        buttons: [
        'No, cancel it!',
        'Yes, I am sure!'
        ],
        dangerMode: true,
    }).then((isConfirm) => {
        if (isConfirm) {
            swal({
                title: 'Data deleted',
                text: 'You may start again',
                icon: 'success'
            }).then(()=> {
                welcomeMessage.innerText = '';
                nameInput.value = '';
                surnameInput.value = '';
                nameInput.removeAttribute('disabled');
                surnameInput.removeAttribute('disabled');
                newBtn.forEach(newBtn => newBtn.style.display = "none");
                errorName.textContent = "";
                localStorage.removeItem("USER");
                localStorage.removeItem("NOTES");
                localStorage.removeItem("TO-DO-LIST");
                localStorage.removeItem("CALENDAR");
            });
        } else {
            swal("Cancelled", "Your data is safe", "error");
        }
    });
}

resetBtn?.addEventListener('click', resetAction);

$("body").vegas({
    slides: [
        {src: '../images/austria2.jpg'},
        {src: '../images/austria3.jpg'},        
    ]
});

// const trial = fetch('https://restcountries.com/v3.1/region/europe')
//       .then( (response) => {return response.json()})
//       .then( (json) => { 
//         for (i of json){
//             console.log(i.capital);
//         }
//       });