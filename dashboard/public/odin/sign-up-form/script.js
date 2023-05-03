document.addEventListener('DOMContentLoaded', () => {
  const inputs = [
    'first-name',
    'last-name',
    'email',
    'phone-number',
    'password',
    'confirm-password',
  ];
  const form = document.getElementById('registration-form');

  // Validation Functions
  const validatePassword = (password) => {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return regex.test(password);
  };

  const showError = (input, message) => {
    const errorElement = document.getElementById(`${input}-error`);
    errorElement.textContent = message;
  };

  const validateForm = () => {
    let valid = true;

    inputs.forEach((input) => {
      const inputElement = document.getElementById(input);
      if (inputElement.value.trim() === '') {
        showError(input, `${input.replace('-', ' ')} is required.`);
        valid = false;
      } else {
        showError(input, '');
      }
    });

    if (!validatePassword(document.getElementById('password').value)) {
      showError(
        'password',
        'Password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.'
      );
      valid = false;
    }

    if (
      document.getElementById('password').value !==
      document.getElementById('confirm-password').value
    ) {
      showError('confirm-password', 'Passwords do not match.');
      valid = false;
    }

    return valid;
  };

  const validateInput = (input) => {
    const inputElement = document.getElementById(input);

    // Validate email format
    if (input === 'email') {
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!emailRegex.test(inputElement.value)) {
        showError(input, 'Please enter a valid email address.');
        return false;
      }
    }

    // Validate phone format
    if (input === 'phone-number') {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(inputElement.value)) {
        showError(input, 'Please enter a valid phone number (10 digits).');
        return false;
      }
    }

    // Validate password format and confirm password
    if (input === 'password' || input === 'confirm-password') {
      if (input === 'password' && !validatePassword(inputElement.value)) {
        showError(
          'password',
          'Password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.'
        );
        return false;
      }
      if (
        input === 'confirm-password' &&
        document.getElementById('password').value !== inputElement.value
      ) {
        showError('confirm-password', 'Passwords do not match.');
        return false;
      }
    }

    if (inputElement.value.trim() === '') {
      showError(input, `${input.replace('-', ' ')} is required.`);
      return false;
    } else {
      showError(input, '');
      return true;
    }
  };

  // Event Listeners
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
      form.submit();
    }
  });

  inputs.forEach((input) => {
    const inputElement = document.getElementById(input);
    inputElement.addEventListener('blur', () => {
      validateInput(input);
    });
  });

  // Matrix Background
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()<>/|';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  const drawMatrix = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + "px 'VT323', monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  };

  setInterval(drawMatrix, 50);
});
