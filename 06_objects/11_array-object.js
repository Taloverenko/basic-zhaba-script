// Массив - это объект, у которого ключами являются цифры, начинающиеся с нуля (индексы),
// а свойствами - значения этого массива по порядку

let digits = [1, 3, 5, 7, 9];

console.log( Object.values(digits) );
console.log( Object.keys(digits) );
console.log( Object.entries(digits) );