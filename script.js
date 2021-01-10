// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialChar = ["'", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var passChoices = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var passwordHolder = "";

  var passLength = parseInt(prompt("How many characters would you like your password to contain? Choose between 8 and 128"));
  
  while(!parseInt(passLength) || passLength < 8 || passLength > 128){
    if (!parseInt(passLength)){
      passLength = ("Invalid input! Please enter a number"); 
    }else{
      passLength = parseInt(prompt("Please choose between 8 and 128"));         
    }  
  }

  
   var confirmUpperCase = confirm("Do you want upper case letters in password?");
   var confirmLowerCase = confirm("Do you want lower case letters in password?");
   var confirmNumeric = confirm("Do you want numbers in password?");
   var confirmSpecialChar = confirm("Do you want special characters in password?");
  
  while (!confirmUpperCase && !confirmLowerCase && !confirmNumeric && !confirmSpecialChar){
    alert("Invalid input! You must choose at least one criteria");
   confirmUpperCase = confirm("Do you want upper case letters in password?");
   confirmLowerCase = confirm("Do you want lower case letters in password?");
   confirmNumeric = confirm("Do you want numbers in password?");
   confirmSpecialChar = confirm("Do you want special characters in password?");
  }
  
}