// =========== Obj
const person = {
	name: 'Niko',
	age: 24,
	gender: 'M',
	toString() {
		return this.name;
	},
	inObj: {
		inName: 'InNiko',
	},
};

// ============ Writable

Object.defineProperty(person.inObj, 'inName', {
	writable: true,
});

person.inObj.inName = 'Igor';

const decript = JSON.stringify(
	Object.getOwnPropertyDescriptors(person, 'name'),
	null,
	'\t'
);

// console.log(person);

// ============== enumerable

Object.defineProperty(person, 'toString', {
	enumerable: false,
});

for (let key in person) {
	// console.log(key, person[key]);
}

// ============== configurable

Object.defineProperty(person, 'addName', {
	value: 'Nikkkkkoo',
	configurable: true,
});

person.addName = 'NoName';

console.log(person);

// console.log(Object.getOwnPropertyDescriptors(person));

// Object.defineProperty(obj, propertyName, descriptor);
// Object.defineProperties(obj, descriptors);

// Object.getOwnPropertyDescriptor(obj, propertyName);
// Object.getOwnPropertyDescriptors;