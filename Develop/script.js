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
// public length variable.
var length = [];

// checks every sinle characters and accept numbers only
checkUserInput = function (check) {
  i = 0;
  while (i != check.length - 1) {
    if (check[i] >= "0" && check[i] <= "9") {
      ++i;
    } else {
      window.alert("Invalid input. Please enter numbers only");
      return startFunc();
    }
  }
};

// start func to collect user input
startFunc = function () {
  debugger;
  length = window.prompt(
    "How many characters would you like your password to contain?"
  );
  checkUserInput(length);
};

// fucn to generate password by user request

function getPasswordOptions() {
  //accepting only whole number from 8 to 128
  if (length < 8 || length > 128) {
    window.alert(
      "Password length must be 8 to 128 numbers of characters to proceed "
    );

    // start all over again.
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

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    hasSpecialCharacters === false &&
    isNumeric === false &&
    isLowerCase === false &&
    isUperCase === false
  ) {
    alert("Must select at least one character type");
    return null;
  }

  // Object to store user input.
  passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    isUperCase: isUperCase,
    isLowerCase: isLowerCase,
    isNumeric: isNumeric,
  };
  return passwordOptions;
}

// select random
randomNumber = (max, min) => Math.floor(Math.random() * (max - min)) + min;

// Generate password
function generatePassword() {
  console.log("Here is generatePassword Fucn");
  var options = getPasswordOptions();

  // Create Password by options
  let result = [];
  let possibleChar = [];

  if (options.hasSpecialCharacters) {
    possibleChar = possibleChar.concat(specialCharacters);
  }
  if (options.isNumeric) {
    possibleChar = possibleChar.concat(numericCharacters);
  }
  if (options.isLowerCase) {
    possibleChar = possibleChar.concat(lowerCasedCharacters);
  }
  if (options.isUperCase) {
    possibleChar = possibleChar.concat(upperCasedCharacters);
  }

  for (let i = 0; i < options.length; i++) {
    randomIndex = randomNumber(possibleChar.length, 0);
    result.push(possibleChar[randomIndex]);
  }
  console.log(possibleChar);

  // return the password
  return result.join("");
}

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
