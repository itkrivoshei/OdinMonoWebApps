// Map, Set, WeakMap, WeakSet

const personObj = {
	name: 'Niko',
	age: 24,
	gender: 'M',
};

const personArr = [
	['name', 'Niko'],
	['age', 24],
	['gender', 'M'],
];

const map = new WeakMap(Object.entries(personObj));

map
	.set(personObj, 'This is object')
	.set(NaN, 'This is NAaAN')
	.delete('name')
	.set('name', 'Nikola');
console.log(map);
