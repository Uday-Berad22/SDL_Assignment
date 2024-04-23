// scripts.js
function validateFirstName() {
  var firstName = document.getElementById("firstName").value;
  var error = document.getElementById("firstNameError");

  if (firstName.trim() === "") {
    error.textContent = "First name is required.";
    error.style.display = "block";
    firstName.focus();
    return false;
  } else {
    error.style.display = "none";

    return true;
  }
}

function validateLastName() {
  var lastName = document.getElementById("lastName").value;
  var error = document.getElementById("lastNameError");

  if (lastName.trim() === "") {
    error.textContent = "Last name is required.";
    error.style.display = "block";
    return false;
  } else {
    error.style.display = "none";
    return true;
  }
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var error = document.getElementById("emailError");

  // Email validation pattern
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === "") {
    error.textContent = "Email is required.";
    error.style.display = "block";
    return false;
  } else if (!emailPattern.test(email)) {
    error.textContent = "Enter a valid email address.";
    error.style.display = "block";
    return false;
  } else {
    error.style.display = "none";
    return true;
  }
}

function validatePassword() {
  var password = document.getElementById("password").value;
  var error = document.getElementById("passwordError");

  if (password.trim() === "") {
    error.textContent = "Password is required.";
    error.style.display = "block";
    return false;
  } else if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters long.";
    error.style.display = "block";
    return false;
  } else {
    error.style.display = "none";
    return true;
  }
}

function validateBirthDate() {
  var birthDate = document.getElementById("birthDate").value;
  var error = document.getElementById("birthDateError");

  if (birthDate.trim() === "") {
    error.textContent = "Birthdate is required.";
    error.style.display = "block";
    return false;
  } else {
    error.style.display = "none";
    return true;
  }
}

function validateForm() {
  var isFirstNameValid = validateFirstName();
  var isLastNameValid = validateLastName();
  var isEmailValid = validateEmail();
  var isPasswordValid = validatePassword();
  var isBirthDateValid = validateBirthDate();
  var isGenderValid = validateGender();

  return (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isBirthDateValid &&
    isGenderValid
  );
}

// Function to validate gender
function validateGender() {
  var genderMale = document.getElementById("genderMale").checked;
  var genderFemale = document.getElementById("genderFemale").checked;
  var error = document.getElementById("genderError");

  if (!genderMale && !genderFemale) {
    error.textContent = "Gender is required.";
    error.style.display = "block";
    return false;
  } else {
    error.style.display = "none";
    return true;
  }
}

// Function to clear error messages when the user focuses on an input field
function clearError(inputId) {
  var errorElement = document.getElementById(inputId + "Error");
  errorElement.textContent = "";
  errorElement.style.display = "none";
}
