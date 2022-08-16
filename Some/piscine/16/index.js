const arr = [1, 3, 5, 2, 0, 4];

// console.log(arr.sort((a, b) => a - b));

Array.prototype.MyMap = function (fn) {
  const result = [];

  for (i = 0; i <= this.length; i++) {
    result.push(fn(this[i], i, this));
  }

  return result;
};

console.log(arr.MyMap((el) => (el += 1)));
