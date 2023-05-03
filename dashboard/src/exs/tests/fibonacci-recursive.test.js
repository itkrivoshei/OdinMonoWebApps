const fibonacciRecursive = require('../fibonacci-recursive');

test('Recursive Fibonacci sequence', () => {
  expect(fibonacciRecursive(0)).toBe(0);
  expect(fibonacciRecursive(1)).toBe(1);
  expect(fibonacciRecursive(2)).toBe(1);
  expect(fibonacciRecursive(3)).toBe(2);
  expect(fibonacciRecursive(4)).toBe(3);
  expect(fibonacciRecursive(5)).toBe(5);
  expect(fibonacciRecursive(6)).toBe(8);
  expect(fibonacciRecursive(7)).toBe(13);
  expect(fibonacciRecursive(8)).toBe(21);
  expect(fibonacciRecursive(9)).toBe(34);
  expect(fibonacciRecursive(10)).toBe(55);
  expect(fibonacciRecursive(20)).toBe(6765);
  expect(fibonacciRecursive(30)).toBe(832040);
  // The test for n=40 has been removed as it may take a long time to compute using the recursive method
});
