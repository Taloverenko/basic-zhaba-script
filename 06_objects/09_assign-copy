// 1

let me = { name: 'Stepan' };
// функция вернет получившийся объект, но это будет один и тот же объект
// в котором мы изменили значение свойства name
let newMe = Object.assign(me, { name: 'Stepa'}, {surname: 'Taloverin' });
console.log(me);
console.log(newMe);
console.log(me === newMe); // true

// 2

let i  = { name: 'Stefan' };
// Подмешиваем свойства с свежесозданный пустой объект 
let newI = Object.assign( {}, i, {name: 'Steve'}, {surname: 'Taylor'} );
// Тоже самое с помощью spread
let newIwithSpread = { ...me, name: 'Steven', surname: 'Talover' };

console.log( i );
console.log( newI );
console.log( newIwithSpread );