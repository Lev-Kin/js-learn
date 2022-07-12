// 1. Написать функцию, которая принимает 2 числа и возвращает:
// -1 – если первое меньше, чем второе;
//  1 – если первое больше, чем второе; 
//  0 – если числа равны.
// function compareNumber(first, second) {
//     if (first < second) {
//         return (-1);
//     } else if (first > second) {
//         return (1);
//     } else {
//         return (0);
//     }
// }

// 2. Написать функцию, которая проверяет, является ли переданное ей число совершенным.
// Совершенное число – это число, равное сумме всех своих собственных делителей.
// function number(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (num % i == 0) {
//             sum += i;
//         }
//     }

//     if (sum == num) {
//         return (true) // совершенное
//     } else {
//         return (false) // не совершенное
//     }
// }

// 3. Написать функцию, которая принимает время (часы, минуты, секунды) 
// и выводит его на экран в формате «чч:мм:сс».
// function time(hours, minutes, seconds) {
//     if (typeof seconds === 'undefined') {
//         if (typeof minutes === 'undefined') {
//             alert(hours + ':00:00');
//         } else {
//             alert(hours + ':' + minutes + ':00');
//         }
//     } else {
//         alert(hours + ':' + minutes + ':' + seconds);
//     }
// }

// 4. Написать функцию возведения числа в степень, используя рекурсию.
// function degree(a, b) {
//     if (b == 0) {
//         return (1);
//     } else {
//         return (a * degree(a, b - 1));
//     }
// }

// 5. Написать функцию для вывода всех множителей переданного числа
//  в возрастающем порядке. Например: число 18 – множители 2 * 3 * 3.
// function a(n) {
//     let div = 2;
//     let s = n + ' = '
//     while (n > 1) {
//         while (n % div === 0) {
//             s += div + ' * ';
//             n = n / div;
//         }
//         div++;
//     }
//     return (s)
// }
