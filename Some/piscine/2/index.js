// Map, Set, WeakMap, WeakSet

const personObj1 = {
	name: 'Niko',
	age: 24,
	gender: 'M',
};

const personArr = [
	['name', 'Niko'],
	['age', 24],
	['gender', 'M'],
];

const map = new Map(Object.entries(personObj1));

map.set(personObj1, 'This is object')
	.set(NaN, 'This is NAaAN')
	.delete('name');

// ============ Obj to primitive

const personObj = {
	name: 'Niko',
	age: 24,
	gender: 'M',
	[Symbol.toPrimitive]: function(hint) {
		if(hint === 'string') {
			return this.name;
		} else if(hint === 'number') {
			return this.age;
		}
	}
};

const objFormObj = {};

objFormObj[+personObj] = 'Loll';

console.log(objFormObj);
