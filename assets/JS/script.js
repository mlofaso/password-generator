// Assignment Code
var generateBtn = document.querySelector('#generate');
var lowercaseArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numericCharactersArr = '0123456789'.split('');
var specialCharactersArr = ' @, %, +, \\, /, ‘, !, #, $, ^, ?, :, ,, ), (, }, {, ], [, ~, -, _, .'.split('');

// create a function that randomly selects an element from an array
function randomSelection(arr) {
	return Math.floor(Math.random() * arr.length)
}

function generatePassword() {
	// STEP 1 - collect user options
	// prompt user for length of password
	var pwLength = prompt('Enter desired length of password');
	pwLength = parseInt(pwLength);

	// verify that pwLength is between 8 and 128 included - if not alert the user and exit the function - if statement, create condition

	if (pwLength < 8 || pwLength > 128) {
		alert('Password must be between 8 and 128 characters')
		return;
	}

	// confirm whether or not to include lowercase, uppercase, numeric, and special characters
	var lowercase = confirm('Do you want lowercase characters in your password?');
	var uppercase = confirm('Do you want uppercase characters in your password?');
	var numeric = confirm('Do you want numeric characters in your password?');
	var special = confirm('Do you want special characters in your password?');
	
	// validate that the user has selected at least one type of character

	if (lowercase === false && uppercase === false && numeric === false && special === false) {
		alert('Password must contain at least one type of character')
		return;
	}

	// STEP 2 - logic to generate password
	var allPossibleOptions = [];
	var passwordGenerated = [];

	// check if user wanted lowercase characters - if so, concatenate lowercaseArr to allPossibleOptions array
	if (lowercase) {
		allPossibleOptions = allPossibleOptions.concat(lowercaseArr);
	}
	// check if user wanted uppercase characters - if so,update allPossibleOptions array
	if (uppercase) {
		allPossibleOptions = allPossibleOptions.concat(uppercaseArr);
	}
	// check if user wanted special characters - if so,update allPossibleOptions array
	if (special) {
		allPossibleOptions = allPossibleOptions.concat(specialCharactersArr);
	}
	// check if user wanted numeric characters - if so,update allPossibleOptions array
	if (numeric) {
		allPossibleOptions = allPossibleOptions.concat(numericCharactersArr);
	}	

	for (var i = 0; i < pwLength; i++) {
		var character = allPossibleOptions[randomSelection(allPossibleOptions)]
		passwordGenerated.push(character)
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
generateBtn.addEventListener('click', writePassword);``