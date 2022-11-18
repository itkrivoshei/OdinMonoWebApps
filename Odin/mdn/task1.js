const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

for (el of myArray) {
	const listElement = document.createElement('li');
	listElement.textContent = el;
	list.appendChild(listElement);
}

const section = document.querySelector('section');
section.appendChild(list);
