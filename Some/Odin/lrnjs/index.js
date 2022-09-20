function getEvenNumbers(from, to) {
  for (let i = from; i <= to; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
} // getEvenNumbers(2, 10);

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
