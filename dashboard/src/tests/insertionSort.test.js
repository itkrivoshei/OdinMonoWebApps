const insertionSort = require('../../public/exs/insertionSort');

test('insertionSort should sort an array of numbers', () => {
  const input = [5, 2, 4, 6, 1, 3];
  const expectedOutput = [1, 2, 3, 4, 5, 6];
  expect(insertionSort(input)).toEqual(expectedOutput);
});

test('insertionSort should sort an array with negative numbers', () => {
  const input = [-2, 4, 1, -3, 5, 0];
  const expectedOutput = [-3, -2, 0, 1, 4, 5];
  expect(insertionSort(input)).toEqual(expectedOutput);
});

test('insertionSort should handle an empty array', () => {
  const input = [];
  const expectedOutput = [];
  expect(insertionSort(input)).toEqual(expectedOutput);
});

test('insertionSort should handle a sorted array', () => {
  const input = [1, 2, 3, 4, 5, 6];
  const expectedOutput = [1, 2, 3, 4, 5, 6];
  expect(insertionSort(input)).toEqual(expectedOutput);
});

test('insertionSort should handle a reversed array', () => {
  const input = [6, 5, 4, 3, 2, 1];
  const expectedOutput = [1, 2, 3, 4, 5, 6];
  expect(insertionSort(input)).toEqual(expectedOutput);
});
