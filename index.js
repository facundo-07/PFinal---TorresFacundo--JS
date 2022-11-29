let total = document.querySelector("#total");
let strgTotal = "Total with interests: ";
let ivaEl = document.querySelector("#iva");
document.querySelector("#iva-button").style.visibility = 'hidden';
const iva = Number(1.21);
let price = 0
let interest = 0
let operation = 0

function calculate(){
    price = parseInt(document.querySelector("#price").value);
    interest = parseInt(document.querySelector("#interest").value);
    operation = (interest * price / 100) + price;
}

function cond(){
    calculate()
    if (isNaN(price)){
        document.querySelector("#error1").textContent = "Please enter a valid number"
        total.textContent = strgTotal
    } else if (isNaN(interest)){
        document.querySelector("#error2").textContent = "Please enter a valid interest rate"
        total.textContent = strgTotal
    } else if (isNaN(interest) && isNan(price)){
        document.querySelector("#error2").textContent = "Please enter a valid interest rate"
        total.textContent = strgTotal
        document.querySelector("#error1").textContent = "Please enter a valid number"
        total.textContent = strgTotal
    } else{
        total.textContent = strgTotal + operation;
        document.querySelector("#error1").textContent = "";
        document.querySelector("#error2").textContent = "";
        document.querySelector("#iva-button").style.visibility = 'visible';
    }
}

function newEntry(){
    document.querySelector("#iva-button").style.visibility = 'hidden';
    document.querySelector("#price").value = "";
    document.querySelector("#interest").value = "";
    document.querySelector("#error1").textContent = "";
    document.querySelector("#error2").textContent = "";
    document.querySelector("#iva-el").textContent = "";
    total.textContent = strgTotal;
}


function calcIva () {
    calculate()
    const ivaOp = operation * iva;
    document.querySelector("#iva-el").textContent = "Total with IVA: " + ivaOp;
}
