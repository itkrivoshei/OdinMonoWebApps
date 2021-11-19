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

// function createNewPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.greeting = function() {
//         alert('Hi! I\'m ' + this.name + '.');
//     };
//     return obj;
// }
// const pers1 = createNewPerson('lol');

// function Person(name) {
//     this.name = name;
//     this.greeting = function() {
//         alert('Hi! I\'m ' + this.name + '.');
//     };
// }
// const pers1 = new Person('lol');

function Person(first, last, age, gender, interests) {
    this.name = {
        first : first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        let interestsInText = function() {
            let text = '';
            for(let i = 0; i < interests.length; i++) {
                text += interests[i] + (interests.length - 1 === i ? '' : ' and ');
            }
            text += '.';
            return text;
        }
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + (this.gender === 'male' ? 'He' : 'She') +' likes ' + interestsInText());
    };
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
};

let person1 = new Person('Bob', 'Smith', 32, 'kek', ['music', 'skiing', 'skiing', 'skiing', 'skiing', 'skiing']);
