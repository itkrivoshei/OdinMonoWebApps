let imgBar = document.querySelector('.thumb-bar');

for(let i = 1; i <= 5; i++) {
    imgBar.insertAdjacentHTML('beforeend', `<img src='images/pic${i}.jpg'>`)
}
