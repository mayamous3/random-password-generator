var requestPW = document.querySelector (".btn")
var resultPW = document.querySelector ("#password")

//execute the generate password based on event listener trigger
function generatePassword(event){
event.preventDefault();
console.log(event);
//define each of the allowable characters for password generation as variables
var upperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers =[1,2,3,4,5,6,7,8,9];
var specialChars=["!","$","*","@","#","%"];
var ulnS = upperCase.concat(lowerCase).concat(numbers).concat(specialChars)
var ulN = upperCase.concat(lowerCase).concat(numbers)
var ulS = upperCase.concat(lowerCase).concat(specialChars)
var unS = upperCase.concat(numbers).concat(specialChars)
var lnS = lowerCase.concat(numbers).concat(specialChars)
var uL = upperCase.concat(lowerCase)
var uN = upperCase.concat(numbers)
var uS = upperCase.concat(specialChars)
var lN = lowerCase.concat(numbers)
var lS = lowerCase.concat(specialChars)
var nS = numbers.concat(specialChars)


//added function to check the user input password length
var passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters"));
if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  } else {
    alert("Invalid password length. Must be a numerical value between 8 and 128, will be defaulted to 8.");
 //length defaulted to 8 when an invalid or null value is supplied
    passwordLength=8
  }
  
//confirm construction of the password - lowercase, uppercase, numerical, special characters
var confirmLower = confirm("Should password include lowercase letters? OK if yes, Cancel if No")
var confirmUpper = confirm("Should password include uppercase letters? OK if yes, Cancel if No")
var confirmNumber = confirm("Should password include numbers? OK if yes, Cancel if No")
var confirmSpecial = confirm("Should password include special characters? OK if yes, Cancel if No")

var allowableCharacters

var finalPassword=[];

//assess password construction based on combinations of inputs from the user

if (confirmLower && confirmUpper && confirmNumber && confirmSpecial)
allowableCharacters=ulnS

else if (confirmLower && confirmUpper && confirmNumber)
allowableCharacters=ulN

else if (confirmLower && confirmUpper && confirmSpecial)
allowableCharacters=ulS

else if (confirmUpper && confirmNumber && confirmSpecial)
allowableCharacters=unS

else if (confirmLower && confirmNumber && confirmSpecial)
allowableCharacters=lnS

else if (confirmLower && confirmUpper)
allowableCharacters=uL

else if (confirmLower && confirmNumber)
allowableCharacters=lN

else if (confirmLower && confirmSpecial)
allowableCharacters=lS

else if (confirmUpper && confirmNumber)
allowableCharacters=uN

else if (confirmUpper && confirmSpecial)
allowableCharacters=uS

else if (confirmSpecial && confirmNumber)
allowableCharacters=nS

else if (confirmSpecial)
allowableCharacters=specialChars

else if (confirmNumber)
allowableCharacters=numbers

else if (confirmLower)
allowableCharacters=lowerCase

else if (confirmUpper)
allowableCharacters=upperCase

else 
alert ("No allowances given, please refresh the page and try again!")

//generate the final password based on user inputs
console.log(typeof passwordLength);
for(var i=0; i < passwordLength; i++) {
    finalPassword.push(allowableCharacters[Math.floor
        (Math.random()* allowableCharacters.length)]);
}

resultPW.textContent= finalPassword.join('');

}

//added event listener for generate password button to prompt script on click
requestPW.addEventListener("click", generatePassword);
