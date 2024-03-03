document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const submitBtn = document.getElementById('submit-btn');
    const form = document.getElementById('signup-form');
    const successMsg = document.getElementById('success-msg');

    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    function validateEmail() {
        const email = emailInput.value.trim();
        if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
            emailError.textContent = 'Make sure email is more than 3 characters and has @ and a.';
        } else {
            emailError.textContent = '';
        }
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        if (password.length < 8) {
            passwordError.textContent = 'Make sure password is more than 8 characters.';
        } else {
            passwordError.textContent = '';
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateEmail();
        validatePassword();
        if (!emailError.textContent && !passwordError.textContent) {
            successMsg.textContent = 'All good to go!';
            successMsg.style.color = 'green';
            setTimeout(function() {
                successMsg.textContent = '';
            }, 2000); // Clear the message after 2 seconds
            clearForm();
        }
    });

    function clearForm() {
        emailInput.value = '';
        passwordInput.value = '';
        emailError.textContent = '';
        passwordError.textContent = '';
    }
});
