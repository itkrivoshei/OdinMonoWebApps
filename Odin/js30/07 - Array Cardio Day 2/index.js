// ## Array Cardio Day 2

const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 },
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

function leastOneOlder(people) {
	let year = new Date().getFullYear();

	return people.some((e) => year - e.year > 18);
}

// Array.prototype.every() // is everyone 19 or older?

function everyOneOlder(people) {
	let year = new Date().getFullYear();

	return people.every((e) => year - e.year > 18);
}

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

function findCommentByID(ID, comments) {
	return comments.find((comment) => comment.id === ID).text;
}

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

function deleteCommentByID(ID, comments) {
	comments.splice(
		comments.findIndex((comment) => comment.id === ID),
		1
	);
}
