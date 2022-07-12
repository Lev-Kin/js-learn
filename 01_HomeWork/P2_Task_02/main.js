// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.

let fraction = {
    numerator: 1, // за́данный числитель
    denominator: 3, // за́данный знаменатель
    plus: function (numerator, denominator) {
        let sum = this.numerator / this.denominator + numerator / denominator;
        alert(
            'Сумма дробей:\n' + this.numerator + '/' + this.denominator +
            ' + ' + numerator + '/' + denominator + ' = ' + sum.toFixed(2)
        );
    },
    minus: function (numerator, denominator) {
        let sub = this.numerator / this.denominator - numerator / denominator;
        alert(
            'Вычитания дробей:\n' + this.numerator + '/' + this.denominator +
            ' - ' + numerator + '/' + denominator + ' = ' + sub.toFixed(2)
        );
    },
    multiply: function (numerator, denominator) {
        let product = (this.numerator / this.denominator) * (numerator / denominator);
        alert(
            'Умножение дробей:\n' + this.numerator + '/' + this.denominator +
            ' * ' + numerator + '/' + denominator + ' = ' + product.toFixed(2)
        );
    },
    division: function (numerator, denominator) {
        let div = this.numerator / this.denominator / (numerator / denominator);
        alert(
            'Деление дробей:\n' + this.numerator + '/' + this.denominator +
            ' / ' + numerator + '/' + denominator + ' = ' + div.toFixed(2)
        );
    }
};

var numerator;
var denominator;

numerator = prompt("Введите числитель: ");
denominator = prompt("Введите знаменатель: ");

fraction.plus(numerator, denominator);
fraction.minus(numerator, denominator);
fraction.division(numerator, denominator);
fraction.multiply(numerator, denominator);
