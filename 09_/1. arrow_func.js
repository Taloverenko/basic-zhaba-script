// function declaration/expression

  // 1. Методы объектов
  const obj = {
    name: 'Name',
    printName() {
      console.log(this.name);
    }
  };

  // 2. Обработчики событий, когда нужен this
  input.addEventListener('input', function() {
    console.log(this.value);
  });

  // 3. Простые именованные функции
  function makeMeSandwich() {
    //
  }


// Arrow function

  // 1. Обработчики событий
  input.addEventListener('input', () => {
    console.log('Input event');
  });

  // 2. При передаче анонимной функции в качестве параметра другой функции 
  setInterval(() => {
    console.log('tick');
  }, 1000)

  // 3. IIFE (вызов функции сразу после ее объявления)
  (() => {}) () // vs (function() {})()