// Ex 1

let idWeekDay = document.getElementById('weekDay');
let idTime = document.getElementById('time');

function addHtmlTime() {
	let timeNow = new Date();

	idTime.innerText =
		'Current time is: ' +
		takeTimeAmPm() +
		' : ' +
		timeNow.getMinutes() +
		' : ' +
		timeNow.getSeconds();
	setTimeout(addHtmlTime, 1000);
}

function takeTimeAmPm() {
	let timeNow = new Date();
	let hours = timeNow.getHours();

	if (hours > 12) {
		hours = hours - 12;
		return hours + ' PM';
	} else {
		return hours + ' AM';
	}
}

function putHtmlWeekDay() {
	let timeNow = new Date();

	idWeekDay.insertAdjacentHTML(
		'beforeend',
		'Today is: ' + timeNow.toLocaleString('default', { weekday: 'long' })
	);
}

addHtmlTime();
putHtmlWeekDay();

// Ex 2

function printPage() {
	window.print();
}

// Ex 3 mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let ex3 = document.getElementById('ex3');

function putDateMask() {
	let timeNow = new Date();

	ex3.innerHTML = `
	${timeNow.getMonth() + 1}-${timeNow.getDate()}-${timeNow.getFullYear()}, 
	${timeNow.getMonth() + 1}/${timeNow.getDate()}/${timeNow.getFullYear()} 
	and so on`;
}

putDateMask();
