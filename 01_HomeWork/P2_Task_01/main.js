// 1. Создать объект, описывающий автомобиль 
// (производитель, модель, год выпуска, средняя скорость),
// и следующие функции для работы с этим объектом.
// 1) Функция для вывода на экран информации об автомобиле.
// 2) Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
function Car(brand, model, year, average_speed) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.average_speed = average_speed;
}

function showCar() {
    document.write('<p>=== Ваш автомобиль ===</p>');
    document.write('<p>Бренд: ' + myCar.brand + '</p>');
    document.write('<p>Модель: ' + myCar.model + '</p>');
    document.write('<p>Год выпуска: ' + myCar.year + '</p>');
    document.write('<p>Средняя скорость: ' + myCar.average_speed + '</p>');
}

function timeFromDistance(distance) {
    let result = distance / myCar.average_speed;
    let relax = 0;

    result = Math.trunc(result) + (((result - (Math.trunc(result))) * 60) / 100)

    for (let hour = 1; hour <= result; hour++) {
        if (hour % 5 == 0) {
            relax++;
            result++;
        }
    }

    result = result.toFixed(2).split(".");

    document.write('------------------------------------------------------------')
    if (relax == 0) {
        document.write('<br>Что бы проехать эту дистанцию: ' + distance +
            ' км.<br>Вам потребуется времени - ' + result[0] + 'ч: ' + result[1] +
            'мин.<br>И вам не понадобится отдых.')
    } else {
        document.write('<br>Что бы проехать эту дистанцию: ' + distance +
            ' км.<br>Вам потребуется времени - ' + result[0] + 'ч: ' + result[1] +
            'мин.<br>' + relax + 'ч. Вы потратили на отдых.')
    }
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

var myCar = new Car("Nissan", "300ZX", 1992, 110);

showCar();

sleep(2000).then(() => {
    showCar();
    var distance = prompt('Введите расстояние которое необходимо проехать в км:');
    timeFromDistance(distance);
});
