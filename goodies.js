var upperChk
var lowerChk
var numberChk
var specialChk
var lengthInput
var genBtn

function randomUpperCase() {
    var upletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upletters[Math.floor(Math.random() * 26)]
}

function randomLowerCase() {
    var lowletters = "abcdefghijklmnopqrstuvwxyz";
    return lowletters[Math.floor(Math.random() * 26)]
}

function randomNubmer() {
    var number = "0123456789";
    return upletters[Math.floor(Math.random() * 10)]
}

function randomSymbol() {
    var symbol = "~!@#$%^&*()_+=-`';:,./?><";
    return symbol[Math.floor(Math.random() * 25)]
}


