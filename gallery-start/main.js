let imgBar = document.querySelector('.thumb-bar');
let dark = document.querySelector('.dark');

dark.onclick = function() {

}

for(let i = 1; i <= 5; i++) {
    imgBar.insertAdjacentHTML('beforeend', `<img class='img${i}' src='images/pic${i}.jpg'>`)
    document.querySelector('.img' + i).onclick = function() {
        document.querySelector('.displayed-img').setAttribute('src', 'images/pic' + i + '.jpg');
    }
}
