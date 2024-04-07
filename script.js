// Validate password
let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirm-password")
let passwordSection = document.querySelector('#password-section')

function validatePassword() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match");

    } else {
        confirmPassword.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;