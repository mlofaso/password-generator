// Assignment Code
var generateBtn = document.querySelector('#generate');
var lowercaseArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numericCharactersArr = '0123456789'.split('');
var specialCharactersArr = ' @, %, +, \\, /, ‘, !, #, $, ^, ?, :, ,, ), (, }, {, ], [, ~, -, _, .'.split('');

// create a function that randomly selects an element from an array
function randomSelection(arr) {
	return; Math.floor(Math.random() * 128)
}

function generatePassword() {
	// STEP 1 - collect user options
	// prompt user for length of password
	var pwLength = prompt('Enter desired length of password');
	pwLength = parseInt(pwLength);

	// verify that pwLength is between 8 and 128 included - if not alert the user and exit the function

  

	// confirm whether or not to include lowercase, uppercase, numeric, and special characters
	var lowercase = confirm('Do you want lowercase characters in your password?');
	var uppercase = confirm('Do you want uppercase characters in your password?');
	var numericCharacters = confirm('Do you want numeric characters in your password?');
	var specialCharacters = confirm('Do you want special characters in your password?');
	
	// validate that the user has selected at least one type of character


	// STEP 2 - logic to generate password
	var allPossibleOptions = [];
	var passwordGenerated = [];

	// check if user wanted lowercase characters - if so, concatenate lowercaseArr to allPossibleOptions array
	if (lowercase) {
		allPossibleOptions = allPossibleOptions.concat(lowercaseArr);
		var mandatoryLowercase = randomSelection(lowercaseArr);
		passwordGenerated.push(mandatoryLowercase);
		console.log(allPossibleOptions);
	}
	// check if user wanted uppercase characters - if so,update allPossibleOptions array
	if (uppercase) {
		allPossibleOptions = allPossibleOptions.concat(uppercaseArr);
		var mandatoryUppercase = randomSelection(uppercaseArr);
		passwordGenerated.push(mandatoryUppercase);
		console.log(allPossibleOptions);
	}
	// check if user wanted special characters - if so,update allPossibleOptions array
	if (special) {
		allPossibleOptions = allPossibleOptions.concat(specialCharactersArr);
		var mandatorySpecialCharacters = randomSelection(specialCharactersArr);
		passwordGenerated.push(specialCharactersArr);
		console.log(allPossibleOptions);
	}
	// check if user wanted numeric characters - if so,update allPossibleOptions array
	if (numeric) {
		allPossibleOptions = allPossibleOptions.concat(numericCharactersArr);
		var mandatoryNumericCharacters = randomSelection(numericCharactersArr);
		passwordGenerated.push(mandatorynumericCharactersArr);
		console.log(allPossibleOptions);
	}	
	// return password
	return passwordGenerated.join('');
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);