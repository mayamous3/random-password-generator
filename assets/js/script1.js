var requestPW = document.querySelector (".btn")
var resultPW = document.querySelector ("#password")

function generatePassword(event){
event.preventDefault();
console.log(event);
var allowableCharacters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    1,2,3,4,5,6,7,8,9,"!","$","*","@","#","%"];
var passwordLength = parseInt(prompt("choose a password length between 8 and 128 characters"));
var finalPassword=[];
console.log(typeof passwordLength);
for(var i=0; i < passwordLength; i++) {
    finalPassword.push(allowableCharacters[Math.floor
        (Math.random()* allowableCharacters.length)]);
}
resultPW.textContent= finalPassword.join('');

}
requestPW.addEventListener("click", generatePassword);
