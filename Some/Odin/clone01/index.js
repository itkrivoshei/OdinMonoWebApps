let htmlBody = document.querySelector('body');

let pRed = document.createElement('p');

pRed.textContent = 'Hey I’m red!';
pRed.style.color = 'red';
htmlBody.appendChild(pRed);

let h3Red = document.createElement('h3');

h3Red.textContent = 'I’m a blue h3!';
h3Red.style.color = 'blue';
htmlBody.appendChild(h3Red);

let divPink = document.createElement('div');

divPink.style.cssText = 'background-color: pink; border: solid black';

let h1InDiv = document.createElement('h1');

h1InDiv.textContent = 'I’m in a div';
divPink.appendChild(h1InDiv);

let pInDiv = document.createElement('p');

pInDiv.textContent = 'ME TOO!';
divPink.appendChild(pInDiv);

htmlBody.appendChild(divPink);
