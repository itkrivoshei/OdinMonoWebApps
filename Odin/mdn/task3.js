let i = 500;
const para = document.createElement('p');

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

for (i = 500; i >= 2; i--) {
  if (isPrime(i)) {
    para.textContent += `${i}, `;
  }
  if (i === 2) {
    para.textContent = para.textContent.slice(0, para.textContent.length - 2);
  }
}

const section = document.querySelector('section');
section.appendChild(para);
