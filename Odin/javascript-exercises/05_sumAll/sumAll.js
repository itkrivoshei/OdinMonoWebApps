const sumAll = function (start, end) {
  if (
    typeof start !== 'number' ||
    typeof end !== 'number' ||
    start < 0 ||
    end < 0
  ) {
    return 'ERROR';
  }

  let res = 0;

  if (start > end) {
    for (i = end; i <= start; i++) {
      res += i;
    }

    return res;
  }

  for (i = start; i <= end; i++) {
    res += i;
  }

  return res;
};

// Do not edit below this line
module.exports = sumAll;
