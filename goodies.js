//assigning variables to buttons

var charLengthSlide = document.getElementById("slidey-guy");
var upperCaseChk = document.getElementById("upper-chk");
var lowerCaseChk = document.getElementById("lower-chk");
var numberChk = document.getElementById("number-chk");
var supSpecChk = document.getElementById("sup-spec-chk");
var passReturn = document.getElementById("gen-btn");
var passDisplay = document.getElementById("password-dis");

//variables for value sets

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var symbol = "!@#$%^&*()_+-=";

//create a variable housing my functions

var totalRandom = {
    up: upperRandomReturn,
    low: lowerRandomReturn,
    num:  numberRandomReturn,
    sym: symbolRandomReturn
};

//use javascript to show where value of slide is at

var lengthDis = document.getElementById("length-dis");

lengthDis.innerHTML = "Length: 68";

charLengthSlide.oninput = function(){
    if(charLengthSlide.value > 0){
        lengthDis.innerHTML = "Length: " + charLengthSlide.value;
    }
}

//create event listener for when "generate" button is clicked/boxes are checked

passReturn.addEventListener("click", function(){
    var pwdLength = parseInt(charLengthSlide.value);
    var chkdUpper = upperCaseChk.checked;
    var chkdLower = lowerCaseChk.checked;
    var chkdNumber = numberChk.checked;
    var chkdSymbol = supSpecChk.checked;

    passDisplay.innerText = generate(pwdLength, chkdUpper,chkdLower, chkdNumber, chkdSymbol);

})

//create functions that are returning random outputs from variables

function upperRandomReturn() {
    return uppercase.charAt(Math.floor(Math.random() * uppercase.length))
}

function lowerRandomReturn() {
    return lowercase.charAt(Math.floor(Math.random() * lowercase.length))
}

function numberRandomReturn() {
    return number.charAt(Math.floor(Math.random() * number.length))
}

function symbolRandomReturn() {
    return symbol.charAt(Math.floor(Math.random() * symbol.length))
}

//Function generating password

function g


