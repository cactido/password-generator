// Assignment code here
function generatePassword() {
  var passwordLength = 0;
  var splitPassword = [];

  while (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt('Choose a password length (8 - 128 characters)');
  }

  while (true) {
    var passwordLowerCase = confirm('Include lower case characters?\n(OK = yes, Cancel = no)');
    var passwordUpperCase = confirm('Include upper case characters?\n(OK = yes, Cancel = no)');
    var passwordNumbers = confirm('Include numbers?\n(OK = yes, Cancel = no)');
    var passwordSpecialCharacters = confirm('Include special characters?\n(OK = yes, Cancel = no)');

    if (passwordLowerCase == false && passwordUpperCase == false && passwordNumerical == false && passwordSpecialCharacters == false) {
      alert('Please choose at least one option from lower case, upper case, numerical and special characters.');
    } else {
      break;
    }
  }

  let alphabet = ['a','b','c,','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let specialCharacters = ['!','#','$','%','&','(',')','*','+','-',':',';','?','_','^','~'];

  var currentCharacter = '';

  if (passwordLowerCase = true) {
    currentCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
    splitPassword.push(currentCharacter);
    passwordLength--;
  }

  for (let i = 0; i < passwordLength; i++) {
    
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
