// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm_password');
  const passwordError = document.getElementById('password-error');
  const confirmPasswordError = document.getElementById(
    'confirm-password-error'
  );

  const validatePassword = (password) => {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return regex.test(password);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let passwordValid = true;
    let passwordsMatch = true;

    if (!validatePassword(passwordInput.value)) {
      passwordError.textContent =
        'Password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.';
      passwordValid = false;
    } else {
      passwordError.textContent = '';
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      passwordsMatch = false;
    } else {
      confirmPasswordError.textContent = '';
    }

    if (passwordValid && passwordsMatch) {
      form.submit();
    }
  });
});
