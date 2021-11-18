let imgBar = document.querySelector('.thumb-bar');
let dark = document.querySelector('.dark');
let btn = document.querySelector('button');

dark.onclick = function() {
    if (this.btn.getAttribute('class') === 'dark') {
        document.querySelector('.overlay').style.backgroundColor = 'rgba(0,0,0,0.5)';
        this.btn.setAttribute('class', 'light');
    } else {
        document.querySelector('.overlay').style.backgroundColor = 'rgba(0,0,0,0)';
        this.btn.setAttribute('class', 'dark')
    }
}

for(let i = 1; i <= 5; i++) {
    imgBar.insertAdjacentHTML('beforeend', `<img class='img${i}' src='images/pic${i}.jpg'>`)
    document.querySelector('.img' + i).onclick = function() {
        document.querySelector('.displayed-img').setAttribute('src', 'images/pic' + i + '.jpg');
    }
}

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
    }
};

let myDataName = 'height';
let myDataValue = '1.75m';
person[myDataName] = myDataValue;
