// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Create object to store password 
var passwordInfo = {
  length: 0,
  numbers: 0,
  special: 0,
  lower: 0,
  upper: 0,
}

// Write password to the #password input
var writePassword = () => {
  info();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var generatePassword = () => {
  var newP = "";
  for (i=0; i < passwordInfo.length; i++) {
    var inputType = randomNum(1,4);

    if (inputType === 1 && passwordInfo.lower === 1) {
      newP += genLower();
    }  else if (inputType === 2 && passwordInfo.upper === 1) {
      newP += genUpper();
    } else if (inputType === 3 && passwordInfo.numbers === 1) {
      newP += genNumbers();
    } else if (inputType === 4 && passwordInfo.special === 1) {
      newP += genSpecial();
    } else i--;
  }
  return newP;
}
// random numbers function similar to gladiator robot project
var randomNum = (min,max) => {
  var value = Math.floor(Math.random() * (max - min +1) + min);
  return value;
}

// function for prompts to question user to see what type of password they want

var info = () => {
while (passwordInfo.length < 8 || passwordInfo.length > 128) {
  passwordInfo.length = window.prompt("How long do you want your password to be? (8 - 128 characters)")
  if (passwordInfo.length < 8 || passwordInfo.length > 128) {
    window.alert ("Invalid, Try Again!!!!!!");
  }
}
while (passwordInfo.lower === 0 && passwordInfo.upper === 0 && passwordInfo.numbers === 0 && passwordInfo.special === 0) {
  var lowerYes = window.confirm("Do you want to have lowercase letters?");
  if (lowerYes) {
    passwordInfo.lower = 1;
  }
  var uppercaseYes = window.confirm("Do you want to have uppercase letters?");
  if (uppercaseYes) {
    passwordInfo.upper = 1;
  }
  var numbersYes = window.confirm("Do you want to have numbers?");
  if (numbersYes) {
    passwordInfo.numbers = 1;
  }
  var specialYes = window.confirm("Do you want to have special characters?");
  if (specialYes) {
    passwordInfo.special = 1;
  }
  if (passwordInfo.lower === 0 && passwordInfo.upper === 0 && passwordInfo.numbers === 0 && passwordInfo.special === 0){
    window.alert ("You need at least one character to make your password!!!!!");
  }
  console.log(passwordInfo);
}
}

let genLower = () => {
  return String.fromCharCode(97 + randomNum(0, 25));
}

let genUpper = () => {
  return String.fromCharCode(65 + randomNum(0, 25));
}

let genNumbers = () => {
  return String.fromCharCode(49 + randomNum(0, 8));
}
// on ASCII Hex table 33-47 is special characters, theres  also 58-63 but easier to refrence first group
let genSpecial = () => {
  return String.fromCharCode(33 + randomNum(0, 15));
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
