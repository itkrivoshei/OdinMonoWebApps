const getTheTitles = function (books) {
	let titles = [];

	for (let bookNum in books) {
		titles.push(books[bookNum].title);
	}

	return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
