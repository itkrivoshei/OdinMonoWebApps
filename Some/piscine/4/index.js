// ============= Promises

setTimeout(() => {
	// console.log('Request data...');
	const data = {
		port: 4040,
		status: 'working',
	};

	setTimeout(() => {
		data.status = 'ok';
		// console.log(data);
	}, 0);
}, 0);

const servData = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Data preparing...');
		const data = {
			port: 4040,
			status: 'working',
		};
		resolve(data);
	}, 2000);
});

servData
	.then((data) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				data.status = 'ok';
				console.log('Data is ready!');
				resolve(data);
			}, 2000);
		});
	})
	.then((data) => {
		setTimeout(() => {
			console.log(data);
		}, 2000);
	});
