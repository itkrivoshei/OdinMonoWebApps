let timeNow = new Date();
let hours = timeNow.getHours();
let idWeekDay = document.getElementById('weekDay');
let idTime = document.getElementById('time');

function takeTimeAmPm() {
	if (hours > 12) {
		hours = hours - 12;
		return hours + ' PM';
	} else {
		return hours + ' AM';
	}
}

idWeekDay.insertAdjacentHTML(
	'beforeend',
	' ' + timeNow.toLocaleString('default', { weekday: 'long' })
);

idTime.insertAdjacentHTML(
	'beforeend',
	' ' +
		takeTimeAmPm() +
		' : ' +
		timeNow.getMinutes() +
		' : ' +
		timeNow.getSeconds()
);
