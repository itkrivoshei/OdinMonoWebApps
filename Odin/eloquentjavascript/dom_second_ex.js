let dog = document.querySelector('#dog');
let hat = document.querySelector('#hat');

let angle = 0;
let lastTime = null;
function animate(time) {
  if (lastTime != null) angle += (time - lastTime) * 0.001;
  lastTime = time;
  dog.style.top = Math.sin(angle) * 40 + 40 + 'px';
  dog.style.left = Math.cos(angle) * 200 + 230 + 'px';

  // Your extensions here.

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
