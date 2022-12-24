const removeFromArray = function (arr, ...del) {
	del.forEach((e) =>
		arr.splice(
			arr.findIndex((el) => el === e),
			typeof arr[arr.findIndex((el) => el === e)] === typeof e ? 1 : 0
		)
	);

	return arr;
};

removeFromArray([1, 2, 3, 4], '1', 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
