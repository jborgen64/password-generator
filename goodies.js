//assigning variables to buttons

var charLengthSlide = document.getElementById("slidey-guy");
var upperCaseChk = document.getElementById("upper-chk");
var lowerCaseChk = document.getElementById("lower-chk");
var numberChk = document.getElementById("number-chk");
var supSpecChk = document.getElementById("sup-spec-chk");
var passReturn = document.getElementById("gen-btn");

//variables for value sets

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var symbol = "!@#$%^&*()_+-=";

//use javascript to show where value of slide is at

var lengthDis = document.getElementById("length-dis");

lengthDis.innerHTML = "Length: 128";

charLengthSlide.oninput = function(){
    if(charLengthSlide.value > 0){
        lengthDis.innerHTML = "Length: " + charLengthSlide.value;
    }
}

//create event listener for when boxes are checked/length specified



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

//create a variable housing my functions

var totalRandom = {
    up: upperRandomReturn,
    low: lowerRandomReturn,
    num:  numberRandomReturn,
    symbol: symbolRandomReturn
};

//create function returning random password

function genPass(up,low,num,sym,length) {

    //create variable for password
    var pwd = "";

    //create variable that counts checked items
    var chkdCount = up + low + num + sym;

console.log(chkdCount)

}






