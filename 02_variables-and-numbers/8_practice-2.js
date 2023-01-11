/* 1. Вычисляем расстояние между двумя точками
Даны координаты x, y 2х точек. Нужно вывести расстояние между ними
Вычисляем по теореме Пифагора */

let x1 = 7;
let y1 = 2;

let x2 = 10;
let y2 = 6;

let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

console.log(Math.sqrt (
  Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)
));



/* 2. Сравниваем два дробных числа с указанной точностью. 
Даны два числа и кол-во знаков после запятой, которое необходимо учитывать. 
Вывести информацию, равны ли эти числа, больше ли первое или меньше второго */

let first = 0.1 + 0.2 + 0.033;
let second = 0.33334;
let precision = 3;

let firstNormalized = Math.round(
  first * Math.pow(10, precision)
);

let secondNormalized = Math.round(
  second * Math.pow(10, precision)
);

  if (first === second) {
    console.log('Исходные числа равны');
} else if (firstNormalized === secondNormalized) {
    console.log('Числа равны');
} else if (firstNormalized > secondNormalized) {
    console.log('Первое число больше');  
} else {
    console.log('Первое число меньше');
}



/* 3. Генератор случайных чисел между n и m
Учесть, что n необязательно меньше, чем m */

let n = -100;
let m = 350;

let range = Math.abs(m - n);                           // Количество цифр, которые могут быть сгенерированы
let numberInRange = Math.round(Math.random() * range); // округлённое число от нуля до range
let min = Math.min(n, m);                              // левая граница возможного числа
console.log(min + numberInRange);

/* 4. Выводим отдельно целую и дробную части числа с точностью до n */

let precision2 = 3;
let number = 0x12f + .3 + .1;

console.log('Исходное число', number);
console.log('Целая часть', Math.floor(number)); // В JS остаток от деления на 1 возвращает дробную часть
console.log('Дробная часть', Math.round(number % 1 * Math.pow(10, precision2)));
