var runningSum = function (nums) {
	return nums.map((el, index) => {
		let res = 0;

		for (let i = 1; i < index; i++) {
			console.log(i);
			res += i;
		}

		return res;
	});
};

console.log(runningSum([1, 2, 3, 4]));
