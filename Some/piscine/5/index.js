// ============= Event Loop

console.log(1);

setTimeout(() => console.log('PreLast'));

Promise.resolve(4).then(console.log);

const asyn = new Promise(() => {
	console.log(2);
	setTimeout(() => {
		console.log('Last')
	})
});

console.log(3);
