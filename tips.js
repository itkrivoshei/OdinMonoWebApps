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
