var textInput = document.getElementById("inp");
var errorInput = document.getElementById("error");
var a = [];

function addValue() {
    var b = textInput.value;                                  
    if (b == "") {  
        errorInput.value = "Enter  Value";
    } else { 
        a.push(b)
        console.log(a); }
    }
    

var lastInput = document.getElementById("ins");

function moreValue() {
    var g = (lastInput.value);
    console.log(g);   
}


var passInput = document.getElementById("int");

function adddValue() {
    var paswrd = (passInput.value);
    console.log(paswrd);   
}


var emailInput = document.getElementById("inn");

function adValue() {
    var mail = (emailInput.value);
    console.log(mail);   
}


var contactInput = document.getElementById("inu");

function aValue() {
    var pho = (contactInput.value);
    console.log(pho);   
}


var cardInput = document.getElementById("ini");

function niValue() {
    var niic = (cardInput.value);
    console.log(niic);   
}