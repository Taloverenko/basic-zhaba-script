let digit = 20;
let otherDigit = digit;
// Исходное значение не меняется, т.к. otherDigit копирует значение из digit
otherDigit += 5; // digit = 20, otherDigit = 25

console.log( digit );
console.log( otherDigit );

// Объекты не копируют значения, а ссылаются на одно место, в котором находятся значения
let obj = { model: 'VW Polo' };
let otherObj = obj;
otherObj.model = 'Volkswagen Polo' // Значение заменится в обоих объектах

console.log( obj );
console.log( otherObj );
console.log(obj === otherObj ); // true

otherObj = { model: 'VW Polo' };
console.log( obj );
console.log( otherObj );
console.log(obj === otherObj ); // false