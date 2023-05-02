function playSound(key, audio) {
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(key) {
  key.addEventListener("transitionend", () => {
    key.classList.remove("playing");
  });
}

window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}'`);

  if (!audio || !key) return;

  removeTransition(key);
  playSound(key, audio);
});
