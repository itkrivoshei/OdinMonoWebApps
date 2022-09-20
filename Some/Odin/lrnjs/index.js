function getEvenNumbers(from, to) {
  for (let i = from; i <= to; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
} // getEvenNumbers(2, 10);

function getPrimeNumbers(from, to) {
  for (let i = from; i <= to; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
} // getPrimeNumbers(0, 100);

function getConsoleNumbers(from, to) {
  // for (let i = from; i <= to; i++) {
  //   console.log(`number ${i}!`);
  // }

  let i = 0;

  while (i <= to) {
    console.log(`number ${i}!`);
    i++;
  }
} // getConsoleNumbers(0, 10);

function getPromptBiggerThan100() {
  while (true) {
    let userAnswer = prompt('Type Number bigger than 100');

    if (userAnswer === null) break;
    else if (userAnswer > 100) {
      alert('Good job!');
      break;
    }
  }
} // getPromptBiggerThan100();
