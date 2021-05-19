// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

function generatePassword() {
  var passwordLength = prompt ("How many characters would you like your password to be?")
  passwordLength=parseInt(passwordLength) 
  var chooseLowercase = confirm ("Would you like lowercase letters? Click OK")
  var chooseUppercase = confirm ("Would you like uppercase letters? Click OK")
  var chooseNumbers = confirm ("Would you like numbers? Click OK")
  var chooseSpecial = confirm ("Would you like special characters? Click OK")

  var lowercaseArr = "abcdefghijklmnopqrstuvwzyz".split("")
  var uppercaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  var numbersArr = "0123456789".split("")
  var specialArr = "!@#$%^&*".split("")

  var chosenCharArr = []
  if(!chooseLowercase && !chooseUppercase && !chooseNumbers && !chooseSpecial) {
    alert("You must choose at least one type of character")
  }
  if (chooseLowercase){
    chosenCharArr=chosenCharArr.concat(lowercaseArr)
  
  }
  if (chooseUppercase){
    chosenCharArr=chosenCharArr.concat(uppercaseArr)
  }
  if (chooseNumbers){
    chosenCharArr=chosenCharArr.concat(numbersArr)
  }
  if (chooseSpecial){
    chosenCharArr=chosenCharArr.concat(specialArr)
  }
  var password = "";
  for (var i =0; i < passwordLength; i++) {
    
    var randomindex = Math.floor(Math.random() * chosenCharArr.length)
    password+=chosenCharArr[randomindex]
  }
return password

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
