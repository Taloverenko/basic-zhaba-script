let Name = 'JS - это';
let surname = 'пиздец!';

function getFullName() {
  return this.Name + ' ' + this.surname;
}

let obj = { Name, surname, getFullName };

console.log(obj.getFullName());

obj.whoAmI = function() {
  console.log(`Меня зовут ${this.Name} ${this.surname}`);
}

obj.whoAmI();



// добавляем функцию другому объекту 2 раза с разными названиями
let otherObj = {
  someMethod: getFullName,
};
otherObj.someOtherMethod = getFullName;

console.log(otherObj.someMethod()); // undefined undefined
console.log(otherObj.someOtherMethod()); // undefined undefined
