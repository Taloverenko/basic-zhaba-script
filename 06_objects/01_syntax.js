let name = 'Stepan';
let surname = 'Taloverenko';
let middle = 'Pavlovich';

let me = {
  name,
  surname,
  middleName: middle,
  birthDate: {year: 1989, month: 5, day: 18},
  occupation: 'frontend developer',
  married: true,
  'property with spaces': null,
  'property.with.dots': undefined,
};

// Создаём новое свойство для объекта
me.education = 'FINEK';
// Изменяем существующее свойство объекта
me.occupation = 'Jobless';

// Те же действия со строками
me['property with spaces'] = '4_20';
me['property.with.dots'] = 'vkusno_i_tochka';

console.log(me);

// Удаляем свойство из объекта

delete me['property with spaces'];
delete me['property.with.dots'];

// Получаем значение свойства
let myName = me.name;
let myBirthYear = me.birthDate.year;

let emptyObj = {}; // Пустой объект
let emptyProp = emptyObj.someProp; // Значение несуществующего свойства объекта - undefined

console.log(me);
console.log('Несуществующее свойство:', emptyProp);