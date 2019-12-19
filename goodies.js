//assigning variables to buttons

var charLengthSlide = document.getElementById("slidey-guy");
var upperCaseChk = document.getElementById("upper-chk");
var lowerCaseChk = document.getElementById("lower-chk");
var numberChk = document.getElementById("number-chk");
var supSpecChk = document.getElementById("sup-spec-chk");
var passReturn = document.getElementById("password");

//variables for value sets

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var symbol = "!@#$%^&*()_+-=";


//create functions that are returning random outputs from variables

function upperRandomReturn() {
    return uppercase.charAt(Math.floor(Math.random() * uppercase.length))
}

console.log(upperRandomReturn())

