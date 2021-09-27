// var for special characters
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// public length variable
var length = [];

// start func to collect user input
startFunc = function () {
  debugger;
  length = window.prompt(
    "How many characters would you like your password to contain?"
  );
 
};

// fucn to generate password by user request

function getPasswordOptions() {
  //accepting only whole number from 8 to 128
  if (length < 8 || length > 128) {
    window.alert("choose minimum 8 to 128 numbers of characters to proced ");

    // start all over again
    return writePassword();
  }

  var hasSpecialCharacters = window.confirm(
    "Click OK to confirm including special characters."
  );
  // LowerCase
  let isLowerCase = window.confirm("clink OK to add lowercase characters.");

  // UpperCase
  let isUperCase = window.confirm("Click OK to add uppercase character.");

  // Numberic
  let isNumeric = window.confirm("Click OK to add Numbers");





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  startFunc();
  console.log("Here is WritePassword Func");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // reset lenght to 0 for the next PW generator user input
  length = 0;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
