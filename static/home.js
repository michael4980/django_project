const form = document.querySelector("#password-form");
const generateButton = document.querySelector("#generate-button");
const copyButton = document.querySelector("#copy-button");
const passwordField = document.querySelector("#password-field");

// Generate a password
function generatePassword() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+-=";

  let selectedChars = letters;
  if (document.querySelector("#uppercase-checkbox").checked) {
    selectedChars += upperCaseLetters;
  }
  if (document.querySelector("#numbers-checkbox").checked) {
    selectedChars += numbers;
  }
  if (document.querySelector("#special-checkbox").checked) {
    selectedChars += specialChars;
  }

  const passwordLength = document.querySelector("#length-select").value;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += selectedChars[Math.floor(Math.random() * selectedChars.length)];
  }

  return password;
}

// Copy the password to clipboard
function copyToClipboard() {
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

// Event listeners
generateButton.addEventListener("click", () => {
  passwordField.value = generatePassword();
});
copyButton.addEventListener("click", copyToClipboard);
