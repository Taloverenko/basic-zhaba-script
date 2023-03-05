document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button'); // создаем кнопку
  let count = 0; // переменная счетчика
  
  function increment() {
    button.textContent = count++;
  }

  increment();
  button.addEventListener('click', increment);
  document.body.append(button);
});