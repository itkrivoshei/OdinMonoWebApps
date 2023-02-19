const repeatString = function (word, num) {
  if (num >= 0) {
    let res = '';

    for (let i = 0; i < num; i++) {
      res += word;
    }

    return res;
  }

  return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
