// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialChar = ["'", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var passLength = parseInt(prompt("How many characters would you like your password to contain? Choose between 8 and 128"));
  
  while(!parseInt(passLength)){
    passLength = ("Invalid input! Please enter a number");
  }
}
  if (passLength < 8 || passLength > 128){
    passLength = parseInt(prompt("Please choose between 8 and 128"));
  }else{
    upperCase = confirm("Do you want upper case letters in password?");
    lowerCase = confirm("Do you want lower case letters in password?");
    numeric = confirm("Do you want numbers in password?");
    specialChar = confirm("Do you want special characters in password?");
  }
  while (!upperCase && !lowerCase && !numeric && !specialChar){
    alert("Invalid input! You must choose at least one criteria");
    upperCase = confirm("Do you want upper case letters in password?");
    lowerCase = confirm("Do you want lower case letters in password?");
    numeric = confirm("Do you want numbers in password?");
    specialChar = confirm("Do you want special characters in password?");
  }
