const getTheTitles = function (books) {
	return books.reduce(function (acc, book) {
		acc.push(book.title);
		return acc;
	}, []);
};

// Do not edit below this line
module.exports = getTheTitles;
