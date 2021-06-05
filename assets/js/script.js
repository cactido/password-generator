// Assignment code here
function generatePassword() {
  var passwordLength = 0;
  var splitPassword = [];

  //user prompts for password length and types of characters to include (uppercase/lowercase letters, numbers, special character)
  while (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt('Choose a password length (8 - 128 characters)');
  }

  while (true) {
    var passwordLowerCase = confirm('Include lower case characters?\n(OK = yes, Cancel = no)');
    var passwordUpperCase = confirm('Include upper case characters?\n(OK = yes, Cancel = no)');
    var passwordNumbers = confirm('Include numbers?\n(OK = yes, Cancel = no)');
    var passwordSpecialCharacters = confirm('Include special characters?\n(OK = yes, Cancel = no)');

    if (passwordLowerCase == false && passwordUpperCase == false && passwordNumbers == false && passwordSpecialCharacters == false) {
      alert('Please choose at least one option from lower case, upper case, numerical and special characters.');
    } else {
      break;
    }
  }

  // generates a random lower case letter, than adds it to a random part of the password array
  function addLowerCase () {
    var currentCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
    var randomPosition = Math.floor(Math.random() * (splitPassword.length + 1));
    splitPassword.splice(randomPosition,0,currentCharacter);
  }

  // generates a random upper case letter, then adds it to a random part of the password array
  function addUpperCase () {
    var currentCharacter = alphabet[Math.floor(Math.random() * (alphabet.length))];
    currentCharacter = currentCharacter.toUpperCase();
    var randomPosition = Math.floor(Math.random() * (splitPassword.length + 1));
    splitPassword.splice(randomPosition,0,currentCharacter);
  }

  // generates a random number, then adds it to a random part of the password array
  function addNumber () {
    var currentCharacter = Math.floor(Math.random() * 10);
    var randomPosition = Math.floor(Math.random() * (splitPassword.length + 1));
    splitPassword.splice(randomPosition,0,currentCharacter);
  }

  // generates a random special character, then adds it to a random part of the password array
  function addSpecial () {
    var currentCharacter = specialCharacters[Math.floor(Math.random() * (specialCharacters.length))];
    var randomPosition = Math.floor(Math.random() * (splitPassword.length + 1));
    splitPassword.splice(randomPosition,0,currentCharacter);
  }

  /* for testing -- bypasses prompts
  var passwordLowerCase = true;
  var passwordUpperCase = true;
  var passwordNumbers = false;
  var passwordSpecialCharacters = false;
  var passwordLength = 128;
  */

  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let specialCharacters = ['!','#','$','%','&','(',')','*','+','-',':',';','?','_','^','~'];

  // forces at least one of the requested types of characters
  if (passwordLowerCase == true) {
    addLowerCase();
    passwordLength--;
  }

  if (passwordUpperCase == true) {
    addUpperCase();
    passwordLength--;
  }
  
  if (passwordNumbers == true) {
    addNumber();
    passwordLength--;
  }

  if (passwordSpecialCharacters == true) {
    addSpecial();
    passwordLength--;
  }

  var characterAdded = false; //flag for when a character is added to allow loop to only add requested characters to generated password

  for (let i = 0; i < passwordLength; i++) {
    characterAdded = false;
    //loops until generated random character is of a requsted type, then adds it randomly the password 
    while (characterAdded == false) {
      characterSet = Math.floor(Math.random() * 4);
      randomPosition = Math.floor(Math.random() * (splitPassword.length + 1));
      if (characterSet == 0 && passwordLowerCase == true) {
        addLowerCase();
        characterAdded = true;
      }
      if (characterSet == 1 && passwordUpperCase == true) {
        addUpperCase();
        characterAdded = true;
      }
      if (characterSet == 2 && passwordNumbers == true) {
        addNumber();
        characterAdded = true;
      }
      if (characterSet == 3 && passwordSpecialCharacters == true) {
        addSpecial();
        characterAdded = true;
      }
    }
  }

  return splitPassword.join('');   //joins randomized characters spliced into an array into a returnable String
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