let htmlBody = document.querySelector('body');

(function createPRedText() {
	let pRed = document.createElement('p');

	pRed.textContent = 'Hey I’m red!';
	pRed.style.color = 'red';
	htmlBody.appendChild(pRed);
})();

(function createH3BlueText() {
	let h3Blue = document.createElement('h3');

	h3Blue.textContent = 'I’m a blue h3!';
	h3Blue.style.color = 'blue';
	htmlBody.appendChild(h3Blue);
})();

(function createDivPink() {
	let divPink = document.createElement('div');

	divPink.style.cssText = 'background-color: pink; border: solid black';

	(function putInside() {
		(function createDivPink() {
			let h1InDiv = document.createElement('h1');

			h1InDiv.textContent = 'I’m in a div';
			divPink.appendChild(h1InDiv);
		})();

		(function createDivPink() {
			let pInDiv = document.createElement('p');

			pInDiv.textContent = 'ME TOO!';
			divPink.appendChild(pInDiv);
		})();

		htmlBody.appendChild(divPink);
	})();
})();

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

function alertFunction() {
	alert('YAY! YOU DID IT!');
}

// METHOD 2
// btn.onclick = alertFunction;

// METHOD 3
// btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
	console.log(e);
	console.log(e.target);
	e.target.style.background = 'chocolate';
});

const buttons = document.querySelectorAll('.bom');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		alert(button.textContent);
	});
});
