var requestPW = document.querySelector (".btn")
var resultPW = document.querySelector ("#password")

function generatePassword(event){
event.preventDefault();
console.log(event);
var upperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers =[1,2,3,4,5,6,7,8,9];
var specialChars=["!","$","*","@","#","%"];
var allowableCharacters = upperCase.concat(lowerCase).concat(numbers).concat(specialChars)
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

var passwordLength = parseInt(prompt("choose a password length between 8 and 128 characters"));

var confirmLower = confirm("Should password include lowercase letters? OK if yes, Cancel if No")
var confirmUpper = confirm("Should password include uppercase letters? OK if yes, Cancel if No")
var confirmNumber = confirm("Should password include numbers? OK if yes, Cancel if No")
var confirmSpecial = confirm("Should password include special characters? OK if yes, Cancel if No")
var finalPassword=[];

if (confirmLower && confirmUpper && confirmNumber && confirmSpecial)
console.log(typeof passwordLength);
for(var i=0; i < passwordLength; i++) {
    finalPassword.push(allowableCharacters[Math.floor
        (Math.random()* allowableCharacters.length)]);
}

resultPW.textContent= finalPassword.join('');

}
requestPW.addEventListener("click", generatePassword);
