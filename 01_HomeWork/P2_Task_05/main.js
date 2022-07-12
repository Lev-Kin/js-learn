// 5.Реализовать класс, описывающий окружность. 
// В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get radiusOfCircle() {
    return this.radius;
  }
  set radiusOfCircle(radius) {
    this.radius = radius;
  }
  get diameterOfCircle() {
    return this.radius * 2;
  }
  square() {
    return Math.PI * this.radius * this.radius;
  }
  circumference() {
    return Math.PI * this.radius * 2;
  }
}

let circle = new Circle(7);
console.log(`1) Радиус  окружности = ` + circle.radiusOfCircle);
console.log(`2) Диаметр окружности = ` + circle.diameterOfCircle);
console.log(`3) Площадь окружности = ` + circle.square().toFixed(2));
console.log(`4) Длинна  окружности = ` + circle.circumference().toFixed(2));
