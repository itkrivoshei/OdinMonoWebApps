const fibonacci = function (num, pre = 1, fin = 1, cycle = 1) {
	if (num < 0) return 'OOPS';

	if (cycle < num) {
		return fibonacci(num, fin + pre, pre, cycle + 1);
	}

	return fin;
};

// Do not edit below this line
module.exports = fibonacci;
