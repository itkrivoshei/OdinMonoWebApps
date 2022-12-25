const palindromes = function (str) {
	const pureStr = str
		.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
		.toLowerCase();

	return pureStr.split('').reverse().join('') === pureStr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
