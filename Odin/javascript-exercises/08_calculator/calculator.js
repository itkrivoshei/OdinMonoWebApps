const add = function (x, y) {
	return x + y;
};

const subtract = function (x, y) {
	return x - y;
};

const sum = function (arr) {
	return arr[0] ? arr.reduce((acc, num) => (acc += num)) : 0;
};

const multiply = function (arr) {
	return arr[0] ? arr.reduce((acc, num) => (acc *= num)) : 0;
};

const power = function (x, y) {
	return x ** y;
};

const factorial = function (x) {
	let res = 1;

	for (let i = 1; i <= x; i++) {
		res *= i;
	}

	return res;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
