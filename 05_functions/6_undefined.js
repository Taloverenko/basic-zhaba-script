function doNothing() {
  console.log('Я ничего не делаю');
}

console.log(doNothing()); // Я ничего не делаю (undefined)
let x = doNothing();
console.log(x); // Я ничего не делаю (undefined)

let empty;
console.log(empty); // undefined