let array = [1, 2, 3, false, null, undefined];

// Проверяем, есть ли элемент с индексом 5
if (array[5] !== undefined) console.log('Элемент есть'); // Не сработает
if (array.length > 5) console.log('Элемент есть');

// лучше задать переменную со значением null, чем пустую
let emptyVar = null;