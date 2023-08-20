document.addEventListener('DOMContentLoaded', () => {
  const inputIds = [
    'first-name',
    'last-name',
    'email',
    'phone-number',
    'password',
    'confirm-password',
  ];

  const form = document.getElementById('registration-form');

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '').slice(0, 10);
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (match) {
      return (
        match[1] +
        (match[2] ? '-' + match[2] : '') +
        (match[3] ? '-' + match[3] : '')
      );
    }
    return '';
  };

  const isPasswordValid = (password) => {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return regex.test(password);
  };

  const showError = (inputId, message) => {
    const errorElement = document.getElementById(`${inputId}-error`);
    errorElement.textContent = message;
  };

  const isInputValid = (inputId) => {
    const inputElement = document.getElementById(inputId);
    const value = inputElement.value.trim();

    let valid = true;

    if (value === '') {
      showError(inputId, `${inputId.replace('-', ' ')} is required.`);
      valid = false;
    } else if (inputId === 'email') {
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!emailRegex.test(value)) {
        showError('email', 'Please enter a valid email address.');
        valid = false;
      }
    } else if (inputId === 'phone-number') {
      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
      if (!phoneRegex.test(value)) {
        showError(
          'phone-number',
          'Please enter a valid phone number (xxx-xxx-xxxx).'
        );
        valid = false;
      }
    } else if (inputId === 'password' && !isPasswordValid(value)) {
      showError(
        'password',
        'Password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.'
      );
      valid = false;
    } else if (
      inputId === 'confirm-password' &&
      value !== document.getElementById('password').value
    ) {
      showError('confirm-password', 'Passwords do not match.');
      valid = false;
    }

    if (valid) {
      inputElement.classList.add('valid');
      inputElement.classList.remove('invalid');
      showError(inputId, '');
    } else {
      inputElement.classList.remove('valid');
      inputElement.classList.add('invalid');
    }

    return valid;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    inputIds.forEach((input) => {
      if (isInputValid(input) === false) valid = false;
    });

    if (valid === true) form.submit();
  });

  const phoneNumberInput = document.getElementById('phone-number');
  phoneNumberInput.addEventListener('input', (e) => {
    e.target.value = formatPhoneNumber(e.target.value);
  });

  inputIds.forEach((inputId) => {
    const inputElement = document.getElementById(inputId);
    inputElement.addEventListener('blur', () => {
      isInputValid(inputId);
    });
    inputElement.addEventListener('focus', () => {
      showError(inputId, '');
    });
  });

  createMatrixBackground();

  function createMatrixBackground() {
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
  }
});
