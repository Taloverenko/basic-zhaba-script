/* Задача 1 - Вычисляем количество квартир в доме.
Дано количество подьездов, этажей и квартир на одном этаже. 
Нужно вывести количество квартир в одном подьезде и во всём доме. */

let entrances = 4; // rоличество подъездов
let floors = 9; // количество этажей
let flatsPerFloor = 4; // количество квартир на этаже
let flatsPerEntrance = floors * flatsPerFloor; // количество квартир в подъезде
console.log('Квартир в подъезде', flatsPerEntrance);
let flats = flatsPerEntrance * entrances // количесво квартир в доме
console.log('Всего квартир в доме', flats);



/* Задача 2 - пропорции для рецепта Кровавой Мэри. 
Даны пропорции ингридиентов для Кровавой Мэри и объем напитка, который нужно получить
Вычислить необходимый объем ингридиентов из этих данных */

// ингридиенты
let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tabasco = 1;
let worcester = 1;

//  желаемый объём напитка 
let volume = 500;

// коэффицент для получения объема ингридиента
let k = volume / (vodka + tomatoJuice + lemonJuice + tabasco + worcester);

// сколько нужно водки для желаемого объёма Кровавой Мэри
console.log(vodka * k);



/* Задача 3 - вычисление дискриминанта и решения квадратного уравнения 
a*x*x + b*x + c = 0 
Даны параметры a, b, c для квадратного уравнения. 
Нужно вывести возможные значения x для этого уравнения. */

let a = 3;
let b = 10;
let c = 5; 

let d = b*b - 4*a*c;
let dRoot = Math.sqrt(d); // Корень дискриминанта
console.log('x1 = ', (-b + dRoot) / (2 * a));
console.log('x2 = ', (-b - dRoot) / (2 * a));



/* Задача 4 - Вычисляем n чисел для ряда Фибоначчи.
Каждое следующее число - сумма двух предыдущих. */

let n = 10;

let current = 0;
let prev = 1;
let prevPrev = 0;

while (n-- > 0) {
  prevPrev = prev;
  prev = current;
  current += prevPrev;
  console.log(current);
}