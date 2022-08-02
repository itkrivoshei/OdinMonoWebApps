// =========== Map, Set, WeakMap, WeakSet

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

// ============== Obj methods

const oj = Object.assign({
	name: 'Niko',
	age: 24,
	gender: 'M',
});

const ojAdd = Object.assign({}, oj, {
	add: 'Addition'
})

const ojSpread = {
	...oj,
	...ojAdd,
}

Object.seal(ojSpread)

// == Iteration

// Object.entries(ojSpread).forEach(([key, value], i, ob) => console.log(`${key} : ${value}`, i, Object.fromEntries(ob).name));

