// 1. Запросить у пользователя его возраст и определить,
// кем он является: ребенком (0–2), подростком (12–18),
// взрослым (18_60) или пенсионером (60– ...).
//            (Ctrl + /)
// let age = Number(prompt('Введите ваш возраст'));
// let ageGroup
// if (age <= 18) {
//     age <= 2 ? ageGroup = 'Вы ребёнок.' : ageGroup = 'Вы подросток.'
// } else if (age < 200) {
//     age >= 60 ? ageGroup = 'Вы пенсионер.' : ageGroup = 'Вы взрослый.'
// } else {
//     ageGroup = 'Некорректный ввод возраста!!!';
// }
// alert(ageGroup)

// 2. Запросить у пользователя год и проверить, високосный он или нет.
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
// let year = Number(prompt('Введите год'));
// if (year < 0) {
//     alert('Некоректный ввод данных!!!')
// } else if (year % 4 == 0) {
//     (year % 100 == 0) ? alert('Год невисокосный.') : alert('Год високосный.')
// } else if (year % 1 == 0) {
//     alert('Год невисокосный.')
// } else {
//     alert('Некоректный ввод данных!!!')
// }

// 3. Запросить у пользователя пятиразрядное число и определить,
// является ли оно палиндромом.
// var searchNumber = Number(prompt('Введите пятизначное число'));
// if ((searchNumber > 9999) && (searchNumber < 100000)) {

//     var compareNumber = 0;
//     var quantity = 0;
//     var i = 1;
//     var currentDigit = 0;
//     var exponentCounter = 0;

//     while (searchNumber / i >= 1) {
//         quantity++;
//         i *= 10;
//     }

//     for (var i = quantity - 1; i >= 0; i--) {

//         var previousDigit = currentDigit;
//         currentDigit = Math.floor(searchNumber / Math.pow(10, i));

//         var number = currentDigit - previousDigit * 10;
//         var compareDigit = number * Math.pow(10, exponentCounter);

//         exponentCounter++;
//         compareNumber += compareDigit;
//     }

//     if (searchNumber === compareNumber) {
//         alert('Число: ' + searchNumber + ' является палиндромом.')
//     } else {
//         alert('Число: ' + searchNumber + ' НЕ является палиндромом.')
//     }

// } else {
//     alert('Вы ввели не пятизначное число!!!');
// }

// 6. Написать конвертор валют. Пользователь вводит количество USD,
// выбирает, в какую валюту хочет перевести:
// EUR, RUB или UAN, и получает в ответ соответствующую сумму.
// const EUR = 0.85;
// const RUB = 76;
// const UAN = 28;
// let exchange;
// let USD = prompt('Введите сумму в долларах:');
// const currency = prompt('Введите валюту для конверсии:\n (EUR, RUB, UAN)');
// switch (currency) {
//     case 'EUR': {
//         exchange = EUR * USD;
//         break;
//     }
//     case 'RUB': {
//         exchange = RUB * USD;
//         break;
//     }
//     case 'UAN': {
//         exchange = UAN * USD;
//         break;
//     }
//     default: {
//         alert('Некорректный ввод валюты!!!' +
//             '\nВы ввели: ' + currency +
//             '\nВвод валют следущий (EUR, RUB, UAN)' +
//             '\nПовторите ввод заново');
//     }
// }
// alert('Конверсия USD:\n' + Math.round(USD * 100) / 100 +
//     'USD -> ' + currency + ' составила: ' + Math.round(exchange * 100) / 100 + currency);

// 4. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
let amount = prompt('Введите сумму покупки:');
if (amount < 200 && amount >= 0 )
    alert('Cумма к оплате составила:\n' + amount + '$\nСкидка отсутствует!');
else if (amount >= 200 && amount < 300)
    alert('Cумма к оплате со скидкой составила:\n' + (amount / 100 * 97).toFixed(2) + '$\nВы получили скидку в 3%');
else if (amount >= 300 && amount < 500)
    alert('Cумма к оплате со скидкой составила:\n' + (amount / 100 * 95).toFixed(2) + '$\nВы получили скидку в 5%');
else if (amount >= 500)
    alert('Cумма к оплате со скидкой составила:\n' + (amount / 100 * 93).toFixed(2) + '$\nВы получили скидку в 7%');
else
    alert('Некоректный ввод данных!!!')
    