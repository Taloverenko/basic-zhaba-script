// запись для 7 чисел

let fibo = [];

fibo.push(1);
fibo.push(1);
fibo.push(2);
fibo.push(3);
fibo.push(5);
fibo.push(8);
fibo.push(13);

// запись для 50 чисел 

let FIBO = [1, 1];

for (let i = 1; i < 49; ++i) {
  FIBO.push(FIBO[i] + FIBO[i - 1]);
}

// Шаги:
// 1. let i = 1
// 2. i < 49 (1 < 49) true
// 3. добавляем в массив сумму первого и нулевого индекса ==> [1, 1, 2]
// 4. ++i; i = 2
// 5. i < 49 (2 < 49) true
// 6. добавляем в массив элемент, который сумма последнего и предпоследнего ==> [1, 1, 2, 3]
// 7. ++i; i = 3
// цикл будет выполняться 48 раз, пока i не станет равно 49, в массиве будет 50 элементов