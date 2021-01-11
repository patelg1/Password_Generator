// Assignment Code
var generateBtn = document.querySelector("#generate");
// Arrays containing the different criteria for password
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

// Function to generate password
function generatePassword(){
  var passwordHolder = "";
  // Prompt asking user how many characters password should contain
  var passLength = parseInt(prompt("How many characters would you like your password to contain? Choose between 8 and 128"));
  // Checking to make sure user enters a number
  while(!parseInt(passLength) || passLength < 8 || passLength > 128){    
      alert("Invalid input! Please enter a number");    
      passLength = parseInt(prompt("Please choose between 8 and 128"));    
  }
  
  // Questions to confirm which criteria user wants to include in password
   var confirmUpperCase = confirm("Do you want upper case letters in password?");
   var confirmLowerCase = confirm("Do you want lower case letters in password?");
   var confirmNumeric = confirm("Do you want numbers in password?");
   var confirmSpecialChar = confirm("Do you want special characters in password?");
  // Checking to make sure at least one criteria is chosen
  while (!confirmUpperCase && !confirmLowerCase && !confirmNumeric && !confirmSpecialChar){
    alert("Invalid input! You must choose at least one criteria");
   confirmUpperCase = confirm("Do you want upper case letters in password?");
   confirmLowerCase = confirm("Do you want lower case letters in password?");
   confirmNumeric = confirm("Do you want numbers in password?");
   confirmSpecialChar = confirm("Do you want special characters in password?");
  }
  // Conditional checks to see which criteria user has chosen
  if (confirmUpperCase === true){
    passChoices = passChoices.concat(upperCase);    
  }
  if (confirmLowerCase === true){
    passChoices = passChoices.concat(lowerCase);
  }
  if (confirmNumeric === true){
    passChoices = passChoices.concat(numeric);
  }
  if (confirmSpecialChar === true){
    passChoices = passChoices.concat(specialChar);
  }
  console.log(passChoices);
  // Loop that takes the user's chosen criteria and randomly selects characters
  for (var i = 0; i < passLength; i++){
    passwordHolder = passwordHolder + passChoices[Math.floor(Math.random() * passChoices.length)];
        
  } 
  return passwordHolder;
}