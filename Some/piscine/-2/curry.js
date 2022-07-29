// ________________________ Arrow

Function.prototype.curry = function (...args) {
	const curried = (fn, ...args) =>
		args.length >= fn.length
			? fn(...args)
			: (...others) => curried(fn, ...args, ...others);
	return curried(this, ...args);
};
// console.log(sum.curry(1)(2)(3));

// ________________________ Simple

function curry2(fn) {
	return function curried(...args) {
		if (args.length >= fn.length) return fn.apply(this, args);
		else
			return (...othersArgs) => {
				return curried.apply(this, args.concat(othersArgs));
			};
	};
}
const izolenta = curry2(sum);
const plus = izolenta();
// console.log(izolenta(1)(2));

// ________________________ Simple

// const curry = (a) => (b) => (c) => sum(a, b, c);
// console.log(curry(1)(2)(3));

// ________________________ Thinkfull

function curry3(fn) {
	return function curried(...args) {
		if (fn.length <= args.length) {
			return fn(...args);
		}

		return function test(...newArgs) {
			return curried.call(this, ...args, ...newArgs);
		};
	};
}

const curriedSum = curry3(sum);
// console.log(curriedSum(2, 3)(2));

// ________________________ Infinity params task from vid

function curry4(fn) {
	return function curried(...args) {
		return function test(...newArgs) {
			if (arguments.length === 0) {
				return fn(...args);
			}
			return curried.apply(this, args.concat(newArgs));
		};
	};
}

const infinSum = curry4(function (...array) {
	return array.reduce((acc, el) => (acc += el));
});
// console.log(infinSum(1, 3, 4)(1)(2)());

// ________________________ Helping func

function sum(a, b, c) {
	return a + b + c;
}
