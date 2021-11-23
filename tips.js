/* Для впуклых углов в css
clip-path: polygon(0 0, 0 100%, 100% 100%, 53% 86%, 24% 73%, 11% 41%);
*/

/* Для фона на половину
.main-header-banner-background:before {
  width: 100%;
  height: 80px;
  background: linear-gradient(258.56deg,#325DE9 31.66%,#548CF6 80.67%);
  content: '';
  position: absolute;
  display: block;
}

.zindex {
  z-index: 2;
}
*/

/* Для деплоя в Github Pages и Angular
 npm i angular-cli-ghpages --save-dev \ Установка
 ng build --prod --base-href "https://GithubUserName.github.io/GithubRepoName/" \ Билд
 npx angular-cli-ghpages --dir=dist/Project-name \ Деплой
*/

/* Для добавления элементов в dom
document.querySelector('.какойтСтиль').insertAdjacentHTML('beforeend', '<img src='images/pic1.jpg'>')
*/

/* Для добавления атрибутов к элементу
document.querySelector('.какойтСтиль').setAttribute('src', 'images/pic' + i + '.jpg');
*/

/* Для сравнения дат
let timeout = new Date(2021, 10, 15, 23, 59, 0); // (Месяц на 1 меньше)
let now = new Date();
 */

/* Объекты
Свойства объекта это прост то что не функции
Методы это функции в объекте
Литерал объекта это когда все вписано
Имя объекта это неймспейс (пространство имен)
И в нем инкапсулированы все поля
Сабнеймспейсы это вот.так.вот
Абстракция или Class это типа литерал объекта, или представление например чела в объекте
Можно создать экземпляр объекта с помощью конструктора (instantiation)
Функции конструкторы с заглавной, в них определены эл-ты для объектов
Экземпляры создаются через const obj1 = new SomeShit('test');


Как задать в значение ключа, другой ключ-значение
let myDataName = 'height';
let myDataValue = '1.75m';
person[myDataName] = myDataValue; // Через точку не выйдет

let person1 = Object(); // создание пустого объекта
let person2 = Object({
    param: key
}); // создание с параметром
let person3 = Object.create(person2) // копирует объект
 */

/* Прототипы
В протатипах сслыки на другие объекты так реализован доступ внутри объекта к другим объектам ЛОЛ

У объекта есть свойство .constructor который возвращает сам конструктор и в него можно подставить переменные и сделать копию
вот так:
lar person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);

Можно менять сам прототип и это очень гибко но лучше определять все в конструкторе
вот так:
Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};

Так можно копировать прототип объекта в другую фигню
var person2 = Object.create(person1);
*/

/* Наследование
Это когда мы берем новый конструктор и обращаемся к другому конструктору и наследуем через его прототип поля
*/

/* JSON
Десериализация - из строки в объект
Сериализацией - из объекта в строку
 */
