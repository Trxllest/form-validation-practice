/* eslint-disable quotes */
import "./style.css";

// elements
const form = document.querySelector("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postal = document.getElementById("postal");
const pass1 = document.getElementById("password1");
const pass2 = document.getElementById("password2");

// regex
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const postalRegExp = /^[A-Za-z]\d[A-Za-z][-\s]?\d[A-Za-z]\d$/;
const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|\W)(?!.*\s).{8,}$/;

email.addEventListener("input", () => {
  if (email.validity.typeMismatch || !emailRegExp.test(email.value)) {
    email.setCustomValidity("I am expecting and email address!");
    console.log('here')
  } else {
    email.setCustomValidity("");
  }
});

pass1.addEventListener("input", () => {
  // Check each requirement
  const lowercaseRegex = /^(?=.*[a-z])/;
  const uppercaseRegex = /^(?=.*[A-Z])/;
  const digitOrAlphanumericRegex = /^(?=.*\d|\W)/;
  const noSpacesRegex = /^(?!.*\s)/;
  const minLengthRegex = /^.{8,}$/;

  const isLowercaseValid = lowercaseRegex.test(pass1.value);
  const isUppercaseValid = uppercaseRegex.test(pass1.value);
  const isDigitOrAlphanumericValid = digitOrAlphanumericRegex.test(pass1.value);
  const isNoSpacesValid = noSpacesRegex.test(pass1.value);
  const isMinLengthValid = minLengthRegex.test(pass1.value);

  // Construct a custom validity message
  let customValidityMessage = "";

  if (!isLowercaseValid) {
    customValidityMessage += "Include at least one lowercase letter.\n";
  }

  if (!isUppercaseValid) {
    customValidityMessage += "Include at least one uppercase letter.\n";
  }

  if (!isDigitOrAlphanumericValid) {
    customValidityMessage +=
      "Include at least one digit or special character.\n";
  }

  if (!isNoSpacesValid) {
    customValidityMessage += "Remove any spaces.\n";
  }

  if (!isMinLengthValid) {
    customValidityMessage +=
      "Ensure the password is at least 8 characters long.\n";
  }

  if (!passRegExp.test(pass1.value)) {
    pass1.setCustomValidity(customValidityMessage);
  } else {
    pass1.setCustomValidity("");
  }
});

pass2.addEventListener("input", () => {
  if (pass2.value !== pass1.value) {
    pass2.setCustomValidity("Passwords must match!");
  } else {
    pass2.setCustomValidity("");
  }
});

postal.addEventListener("input", () => {
    if (!postalRegExp.test(postal.value)) {
        postal.setCustomValidity("Enter a valid postal code!")
    } else {
         postal.setCustomValidity("");
    }
})
