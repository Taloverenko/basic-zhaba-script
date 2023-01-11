// 1. Вывести в консоль счётчик от 0 до 9

for (let i = 0; i < 10; ++i) {
  console.log(i);
}


// 2. Заполнить массив квадратом числа, которое есть в счётчике и вывести в консоль

let a = [];
for (let i = 0; i < 10; ++i) {
  a.push(i * i);
}
console.log(a);


// 3. на основе массива из прошлого примера создаём новый со значениями делёными на 2

let b = [];
for (let pow2 of a) {
  b.push(pow2 / 2);
}
console.log(b);


// 4. Заполнение массива на основе других данных (складываем в массив строки файла)

let lines = [];
let next;
while (next = file.nextLine()) {
  lines.push(next);
}


// 5. Вывести длину строки из прошлого примера.

for (let line of lines) {
  console.log('Длина строки:', line.length);
}


// 6. Вывести не только длину, но и номер строки.

for (number in lines) {
  console.log(`Длина строки №${number}: ${lines[number].length}`);
}


// 7. Обратботка значений массива в обратном порядке 

let aReversed = [];
for (let i = a.length - 1; i >= 0; --i) {
  aReversed.push(a[i]);
}

// 8. Выход из цикла при выполнении условия, либо при тысячи попытках

let currentAttempt = 0;
while (currentAttempt++ < 1000) { // Выход из цикла, если условие никогда не выполнится
  if (crayfishWhistles()) break;
}

// 9. Обработка нескольких массивов одинаковой длины 

for (let i in a) {
  console.log(a[i] + aReversed[i]);
}
for (let i = 0; i < a.length; ++i) {
  console.log(a[i] + aReversed[i]);
}

// 10. Цикл со счётчиком и сложной логикой изменения значения счётчика 

for (let x = 0; x < 100; x += Math.round(Math.random() * 5)) {
  console.log(x);
}