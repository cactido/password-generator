// Assignment code here
function generatePassword() {
  var passwordLength = 0;
  var splitPassword = [];

  /*
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
  */

  var passwordLowerCase = true;
  var passwordUpperCase = true;
  var passwordNumbers = true;
  var passwordSpecialCharacters = true;
  var passwordLength = 24;

  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let specialCharacters = ['!','#','$','%','&','(',')','*','+','-',':',';','?','_','^','~'];

  var currentCharacter = '';
  var randomPosition = 0;

  if (passwordLowerCase == true) {
    currentCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
    splitPassword.push(currentCharacter);
    passwordLength--;
  }

  if (passwordUpperCase == true) {
    currentCharacter = alphabet[Math.floor(Math.random() * (alphabet.length))];
    currentCharacter = currentCharacter.toUpperCase();
    randomPosition = Math.floor(Math.random() * (splitPassword.length + 1));
    splitPassword.splice(randomPosition,0,currentCharacter);
    passwordLength--;
  }
  
  if (passwordNumbers == true) {
    currentCharacter = Math.floor(Math.random() * 10);
    randomPosition = Math.floor(Math.random() * (splitPassword.length + 1));
    splitPassword.splice(randomPosition,0,currentCharacter);
    passwordLength--;
  }

  if (passwordSpecialCharacters == true) {
    currentCharacter = specialCharacters[Math.floor(Math.random() * (specialCharacters.length))];
    randomPosition = Math.floor(Math.random() * (splitPassword.length + 1));
    splitPassword.splice(randomPosition,0,currentCharacter);
    passwordLength--;
  }

  for (let i = 0; i < passwordLength; i++) {
    characterSet = Math.floor(Math.random() * 3);
    if characterSet == 0 {
      
    }
  }

  console.log(splitPassword.length);
  console.log(splitPassword.join(''));
  return splitPassword.join('');
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
