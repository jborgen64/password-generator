//assigning variables to buttons

var charLengthSlide = document.getElementById("slidey-guy");
var upperCaseChk = document.getElementById("upper-chk");
var lowerCaseChk = document.getElementById("lower-chk");
var numberChk = document.getElementById("number-chk");
var supSpecChk = document.getElementById("sup-spec-chk");
var passReturn = document.getElementById("password")

//variables for value sets

var upletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowletters = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "~!@#$%^&*()_+=-`';:,./?><";

console.log(getPassword(6,upletters))

function getPassword(l,valueset) {
    pwd = "";
    for (var i = 0; i<l; i++) {
        pwd += valueset.charAt(Math.floor(Math.random() * valueset.length))
    }
    return pwd;
}

