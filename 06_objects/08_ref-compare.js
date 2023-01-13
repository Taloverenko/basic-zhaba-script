// obj1, obj2 - ссылки на один и тот же объект
let obj1 = { name: 'Something' };
let obj2 = obj1;

// И они равны 
console.log( obj1 === obj2 ); // true

obj2 = { name: 'Something' }; // Становится ссылкой на новый объект с такими свойствами
console.log( obj1 === obj2 ); // false
console.log( obj1.name === obj2.name ); // true