// 1. Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!» 
//          (Ctrl + /)
// let firstName = prompt('Введите своё имя!');
// alert('Привет, ' + firstName);

// 2. Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
// const year = 2021;
// let born = prompt('Введите год рождения');
// let age = year - born;
// alert('Ваш возраст в 2021 году ' + age + ' лет.');

// 3. Реализуйте конвертор валют. 
// Пользователь вводит доллары, программа переводит в евро.
// Курс валюты храните в константе.
// const evroRate = 0.85;
// let dollar = prompt('Введите сумму в долларах');
// let euro = evroRate * dollar;
// alert('Конверсия Долора к Евро составила: ' + euro);

// 4. Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
// Программа выводит сколько шоколадок может купить пользователь
// и сколько сдачи у него останется.
var money = prompt('Введите cумму деньг в кошельке:');
var chocolate = prompt('Введите цену шоколадки:');
var buy = money / chocolate;
alert('Можно купить ' + parseInt(buy) + ' шоколадок');
