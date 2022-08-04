// ============= Promises

// setTimeout(() => {
// 	// console.log('Request data...');
// 	const data = {
// 		port: 4040,
// 		status: 'working',
// 	};

// 	setTimeout(() => {
// 		data.status = 'ok';
// 		// console.log(data);
// 	}, 0);
// }, 0);

// const servData = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Data preparing...');
// 		const data = {
// 			port: 4040,
// 			status: 'working',
// 		};
// 		resolve(data);
// 	}, 2000);
// });

// servData
// 	.then((data) => {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				data.status = 'ok';
// 				console.log('Data is ready!');
// 				resolve(data);
// 			}, 2000);
// 		});
// 	})
// 	.then((data) => {
// 		setTimeout(() => {
// 			console.log(data);
// 		}, 2000);
// 	});

function sleep1(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, ms);
	}).then(() => {
		console.log('*');
		setTimeout(() => {
			console.log('+');
		}, 0);
	});
}

// sleep(2000).then(() => console.log('2'));
// sleep(3000).then(() => console.log('3'));
// sleep(4000).then(() => console.log('4'));

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
}

// function getDataFromServ(url) {
// 	console.log('Data collecting...')
// 	return sleep(2000)
// 		.then(() => fetch(url))
// 		.then(resp => resp.json())
// 		.then(data => console.log(data));
// }

async function getDataFromServ(url) {
	try {
		await sleep(2000);
		const resp = await fetch(url);
		console.log(await resp.json());
	} catch (e) {
		console.error(e);
	} finally {
		console.log('Finally');
	}
}

// getDataFromServ(URL);

const getDataPromise = (url) => {
	fetch(url)
		.then((resp) => resp.json())
		.then((data) => console.log(data))
		.catch((err) => console.log('Error > ', err));
};

async function getDataAwait(url) {
	const resp = await fetch(url);
	const data = await resp.json();
	console.log(data);
}

// getData('https://api.github.com/users/itkrivoshei');

const elVideo = document.querySelector('video');

const getVideoPromise = (videoEl) => navigator.mediaDevices
	.getUserMedia({ video: true })
	.then((stream) => videoEl.srcObject = stream);

async function getVideoAwait(videoEl) {
	const media = await navigator.mediaDevices.getUserMedia({ video: true });
	videoEl.srcObject = media;
}

getVideoAwait(elVideo);

