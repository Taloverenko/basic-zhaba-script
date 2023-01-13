let digit = 20;
let otherDigit = digit;
// Исходное значение не меняется, т.к. otherDigit копирует значение из digit
otherDigit += 5; // digit = 20, otherDigit = 25


// Объекты не копируют значения, а ссылаются на одно место, в котором находятся значения
let obj = { model: 'VW Polo'};
let otherObj = obj;
otherObj.model = 'Volkswagen Polo' // Значение заменится в обоих объектах

console.log( digit );
console.log( otherDigit );
console.log( obj );
console.log( otherObj );