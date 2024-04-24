document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("firstName")
    .addEventListener("input", validateFirstName);
  document
    .getElementById("lastName")
    .addEventListener("input", validateLastName);
  document.getElementById("email").addEventListener("input", validateEmail);
  document
    .getElementById("password")
    .addEventListener("input", validatePassword);
  document
    .getElementById("confirmPassword")
    .addEventListener("input", validateConfirmPassword);
});

function validateFirstName() {
  var firstName = document.getElementById("firstName").value;
  var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;

  var errorSpan = document.getElementById("firstNameError");

  if (!nameRegex.test(firstName)) {
    errorSpan.textContent = "Please enter a valid first name";
  } else {
    errorSpan.textContent = "";
  }
}

function validateLastName() {
  var lastName = document.getElementById("lastName").value;
  var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;

  var errorSpan = document.getElementById("lastNameError");

  if (!nameRegex.test(lastName)) {
    errorSpan.textContent = "Please enter a valid last name";
  } else {
    errorSpan.textContent = "";
  }
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var errorSpan = document.getElementById("emailError");

  if (!emailRegex.test(email)) {
    errorSpan.textContent = "Please enter a valid email address";
  } else {
    errorSpan.textContent = "";
  }
}

function validatePassword() {
  var password = document.getElementById("password").value;
  var passwordRegex =
    /^(?=.[a-zA-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;

  var errorSpan = document.getElementById("passwordError");

  if (!passwordRegex.test(password)) {
    errorSpan.textContent =
      "Password must be at least 8 characters long and contain at least one letter, one digit, and one special character";
  } else {
    errorSpan.textContent = "";
  }
}

function validateConfirmPassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  var errorSpan = document.getElementById("confirmPasswordError");

  if (password !== confirmPassword) {
    errorSpan.textContent = "Passwords do not match";
  } else {
    errorSpan.textContent = "";
  }
}

function validateForm() {
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePassword();
  validateConfirmPassword();

  var errorSpans = document.querySelectorAll(".error");

  for (var i = 0; i < errorSpans.length; i++) {
    if (errorSpans[i].textContent !== "") {
      return false;
    }
  }

  return true;
}
