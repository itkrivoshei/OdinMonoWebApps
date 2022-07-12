document.getElementById('first').addEventListener('click', function (e) {
	console.log(e.target.nodeName);
});

// const mas = [2, 3, 5, 7, 8, '', '22', '0', 1, 21, 43, 0, 54, 21, 122, 1, 56];
//let copy = [];
// mas.forEach((elem, index, number) => copy.push(elem * 2));
// let num = mas.reduce((acum, el) => acum + el, 5);
// const multiply = (el) => el * 3;
// let num = mas.map(multiply);
// copy.push(mas.filter((el) => (el > 22 ? true : false)));
//let max = mas.reduce((acc, el) => (el > acc ? el : acc));
//mas.forEach((el) => copy.unshift(el));
//let copy = mas.filter((el) => (!!el ? el : 0));
//let copy = [...mas.reverse()] + [...mas];

// const pers = {
// 	name: 'Dima',
// 	age: 24,
// };
// const { name, age } = pers;
// console.log(name, age);

// slice(start, end) & substring(start, length)

// fetch('https://jsonplaceholder.typicode.com/posts/1').then((resp) =>
// 	resp.json().then((json) => console.log(json))
// );

// async function info() {
// 	let data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// 	let json = await data.json();
// 	console.log(json);
// }
// info();

// const obj = {
// 	name: 'max',
// 	things: {
// 		pen: 1,
// 		laptop: 3,
// 	},
// };

// const copy = JSON.parse(JSON.stringify(obj));

// copy.things.pen += 4;

// console.log(obj, copy);
