document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm_password");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById(
    "confirm-password-error"
  );

  const validatePassword = (password) => {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return regex.test(password);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let passwordValid = true;
    let passwordsMatch = true;

    if (!validatePassword(passwordInput.value)) {
      passwordError.textContent =
        "Password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.";
      passwordValid = false;
    } else {
      passwordError.textContent = "";
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordError.textContent = "Passwords do not match.";
      passwordsMatch = false;
    } else {
      confirmPasswordError.textContent = "";
    }

    if (passwordValid && passwordsMatch) {
      form.submit();
    }
  });
});

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()<>/|";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";
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
}

setInterval(drawMatrix, 40);
