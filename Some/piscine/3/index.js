// =========== Obj
const person = {
	name: 'Niko',
	age: 24,
	gender: 'M',
	// toString() {
	// 	return this.name;
	// },
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

// console.log(Object.getOwnPropertyDescriptors(person));

// Object.defineProperty(obj, propertyName, descriptor);
// Object.defineProperties(obj, descriptors);

// Object.getOwnPropertyDescriptor(obj, propertyName);
// Object.getOwnPropertyDescriptors;

// ========= AJAX

const URL = 'https://jsonplaceholder.typicode.com/users';

// ========= XMLHttpRequest

function sendRequestXML(method, url, body = null) {
	// console.log(body);
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.responseType = 'json';
		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response);
			}

			resolve(xhr.response);
		};

		xhr.send(JSON.stringify(body));
	});
}

// sendRequestXML('POST', URL, person)
// 	.then((data) => console.log(data))
// 	.catch((error) => console.error(error));

// ========= fetch

function sendRequestFetch(method, url, body = null) {
	return fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => {
			return response.json();
		})
}

// sendRequestFetch('POST', URL, person)
// 	.then((data) => console.log(data))
// 	.catch((error) => console.error(error));

async function asyncGetData(url) {
	let data = await fetch(url) ;
	let parData = await data.json();
	console.log(parData);
}

asyncGetData(URL);
