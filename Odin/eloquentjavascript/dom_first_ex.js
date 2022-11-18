const MOUNTAINS = [
	{ name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
	{ name: 'Everest', height: 8848, place: 'Nepal' },
	{ name: 'Mount Fuji', height: 3776, place: 'Japan' },
	{ name: 'Vaalserberg', height: 323, place: 'Netherlands' },
	{ name: 'Denali', height: 6168, place: 'United States' },
	{ name: 'Popocatepetl', height: 5465, place: 'Mexico' },
	{ name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
];

function createTableFrom(arr, to) {
	console.log(arr.length);
	let mainBlock = document.querySelector(to);
	let table = document.createElement('table');
	let mainTr = document.createElement('tr');
	let name = document.createElement('th');
	let height = document.createElement('th');
	let place = document.createElement('th');

	name.textContent = 'name';
	height.textContent = 'height';
	place.textContent = 'place';
	mainBlock.appendChild(table);
	table.appendChild(mainTr);
	mainTr.appendChild(name);
	mainTr.appendChild(height);
	mainTr.appendChild(place);
	table.style.border = '1px solid black';

	arr.forEach((el) => {
		console.log(el);
		let tr = document.createElement('tr');
		let name = document.createElement('td');
		let height = document.createElement('td');
		let place = document.createElement('td');

		name.textContent = el.name;
		height.textContent = el.height;
		place.textContent = el.place;
		table.appendChild(tr);
		tr.appendChild(name);
		tr.appendChild(height);
		tr.appendChild(place);
		height.style.textAlign = 'right';
	});
}

createTableFrom(MOUNTAINS, '#mountains');
