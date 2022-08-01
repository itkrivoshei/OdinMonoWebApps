const person = Object.create(
	{},
	{
		name: {
			value: 'Niko',
			enumerable: true,
		},
		birth: {
			value: 1998,
			enumerable: true,
		},
		age: {
			get() {
				return 199999;
			},
			set() {
				document.body.style.background = 'Red';
			},
		},
	}
);

const personTwo = {
	birth: 1989,
	name: 'Lera',
};

const personThree = {
	__proto__: personTwo,
	age: 22,
};

class Hater {
	constructor(name, age) {
		(this.name = name), (this.age = age);
	}

	getInfo() {
		console.log(this.name, this.age);
	}
}

const someOne = new Hater('Nikita', 42);

// for (let key in person) {
// 	console.log(key, person[key]);
// }

const animal = {
	name: 'Vika',
	age: 8,
	weight: 4,
};

class Animal {
	constructor(options) {
		this.name = options.name;
		this.age = options.age;
		this.weight = options.weight;
	}

	static animalVoice() {
		console.log("I'm animal");
	}
}

class Dog extends Animal {
	static dogVoice() {
		console.log('Wof');
	}

	get realAge() {
		return this.age * 7;
	}

	set changeAge(newAge) {
		this.age = newAge;
	}
}

const vika = new Dog({
	name: 'Vika',
	age: 8,
	weight: 5,
});

class Component {
	constructor(selector) {
		this.$el = document.querySelector(selector);
	}

	hide() {
		this.$el.style.display = 'none';
	}

	show() {
		this.$el.style.display = 'block';
	}
}

class Box extends Component {
	constructor(options) {
		super(options.selector);
		this.$el.style.width = this.$el.style.height = options.size + 'px';
		this.$el.style.background = options.color;
	}
}

class Circle extends Box {
	constructor(options) {
		super(options);
		this.$el.style.borderRadius = '50%';
	}
}

const box1 = new Box({
	selector: '#box1',
	size: 100,
	color: 'chocolate',
});

const box2 = new Box({
	selector: '#box2',
	size: 150,
	color: 'blue',
});

const circle1 = new Circle({
	selector: '#circle1',
	size: 50,
	color: 'green',
});

// function Car(brand, color) {
// 	this.brand = brand;
// 	this.color = color;
// }

// Car.prototype.start = function () {
// 	console.log(`${this.brand} READY!`);
// };

class Car {
	constructor(brand, color) {
		this.brand = brand;
		this.color = color;
	}

	start() {
		console.log(`${this.brand} READY!`);
	}
	stop() {
		console.log(`${this.brand} OFF`);
	}

	set rating(value) {
		this.score = value.toUpperCase();
	}

	get lol() {
		return this.score;
	}
}

const tesla = new Car('Tesla', 'Black');

console.log(tesla.start());
