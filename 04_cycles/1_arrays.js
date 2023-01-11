let fruits = ['яблоко', 'апельсин', 'груша', 'банан', 'манго'];
fruits[0]; // яблоко
fruits[3]; // банан

fruits[fruits.length - 1]; // Выведет последний элемент массива

// создание пустого массива и добавление в него элементов

let alphabet = [];

alphabet.push('C'); // добавить в конец массива
alphabet.push('D', 'F', 'G');

alphabet.unshift('A', 'B'); // Добавить в начало массива

alphabet.length; // 6

// Исправить ошибку 

let greetings = ['hello', 'good mo', 'good evning', 'good afternoon'];
greetings[2] = 'good evening';