document.getElementById('first').addEventListener('click', function (e) {
	console.log(e.target.nodeName);
});

// This - context operator
// Return the object which in now moment work and can change himself depends on place and context

// null = nothing, undef = not yet nothing, NaN
// null == undef == NaN = true
// HOW TO CALL
// undef - if create create and not assign anything / or ask none exist parameter in obj
// null - almost only to assign to variable
// NaN 10 / 0 OR 10 * 'sfasf'

// Scope - space where we have access to some variables
// Types - global, functional, block
// Scope Chain rules for searching variables

// ES Diff
// __proto__, rest, distructurisation, classes, asyn, await, spred, promise, =>, let, const

// Proto every obj have it we can add something to it

// Async => single threaded => Event loop => Call stack => Web API => Callback Queue => Micro Macro tasks

// arrow func => diff context & no hosting

// New - in function constructor for creating objects
// function Employee(name, position, yearHired) {
// 	this.name = name;
// 	this.position = position;
// 	this.yearHired = yearHired;
// }
// const emp = new Employee('Marko Polo', 'Software Development', 2017);

// Arrays
// FILTER   mas.filter((element, index, array) => {});
// MAP      mas.map((el) => el * 3);
// REDUCE   mas.reduce((acc, el) => (el > acc ? el : acc));
// PUSH     mas.push(mas.filter((el) => (el > 22 ? true : false)));
// FOREACH  mas.forEach((el) => copy.unshift(el));
// ISARRAY

// Get from link
// fetch('https://jsonplaceholder.typicode.com/posts/1').then((resp) =>
// 	resp.json().then((result) => console.log(result))
// );
// Or + IIFE
// (async function () {
// 	let data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// 	let json = await data.json();
// 	console.log(json);
// })();

// Copy obj & mas
// const copy = [...objOrMas];
// const objFullCopy = JSON.parse(JSON.stringify(obj));

// Closures
// const globalVar = 'abc';
// function a() {
// 	console.log(globalVar);
// }
// a();

//-------------------------------------------------

// FizzBuzz
// for (var i = 1; i < 101; i++) {
// 	if (i % 15 == 0) console.log('FizzBuzz');
// 	else if (i % 3 == 0) console.log('Fizz');
// 	else if (i % 5 == 0) console.log('Buzz');
// 	else console.log(i);
// }

// const isPalindrome = str => str === str.split('').reverse().join('');

// const fibonacci = (num) => {
// 	console.log(num);
// 	if (num < 2) return num;
// 	return fibonacci(num - 1) + fibonacci(num - 2);
// };

// function flatten(array) {
// 	const res = [];
// 	for (let i = 0; i < array.length; i++) {
// 		if (Array.isArray(array[i])) {
// 			const flat = flatten(array[i]);
// 			for (let j = 0; j < flat.length; j++) {
// 				res.push(flat[j]);
// 			}
// 		} else {
// 			res.push(array[i]);
// 		}
// 	}
// 	return res;
// }

// const isUnique = (str) => new Set(str).size === str.length;

// const removeDupes = (str) => Array.from(new Set(str)).join('');

// function isStringRotated(source, test) {
// 	return source.length === test.length && (source + source).includes(test);
// }

// Sort mass
// const arr = ['g', 'h', 'h', 'm', 'o', 'g', 'g', 'l', 'l', 'l'];
// let ob = arr.reduce((acc, el) => {
// 	acc[el] = (acc[el] || 0) + 1;
// 	return acc;
// }, {});
// let final = Object.keys(ob);
// key.sort((a, b) => {
// 	return ob[b] - ob[a];
// });

// function arraySubset(source, subset) {
// 	if (source.length < subset.length) {
// 		return false;
// 	}
// 	for (let i = 0; i < subset.length; i++) {
// 		const index = source.indexOf(subset[i]);
// 		if (index === -1) {
// 			return false;
// 		}
// 		delete source[index];
// 	}
// 	return true;
// }

// Valid Parentheses
// const isValid = (s) => {
// 	if (s.length % 2 !== 0) return false;
// 	const stack = [];
// 	const map = new Map([
// 		['(', ')'],
// 		['[', ']'],
// 		['{', '}'],
// 	]);
// 	for (let i = 0; i < s.length; i += 1) {
// 		if (map.has(s[i])) {
// 			stack.push(map.get(s[i]));
// 		} else if (s[i] !== stack.pop()) {
// 			return false;
// 		}
// 	}
// 	return stack.length === 0;
// };
