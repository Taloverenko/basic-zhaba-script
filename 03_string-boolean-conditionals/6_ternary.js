let x = 0;

if (Math.random() > 0.5) {
  x = 10;
} else {
  x = 20; 
}

// То же самое 

x = Math.random() > 0.5 ? 10 : 20; // сначала пишем условие оператора, после знака вопроса значение при выполнении, после двоеточия не выполнении

// Плохой пример 

let age = 23;
let isAdult = age > 18 ? true : false;

// Нужно так:

isAdultDoneRight = age > 18;