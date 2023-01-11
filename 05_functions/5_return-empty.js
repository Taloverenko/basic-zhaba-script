function checkAge(age) {
  console.log(`Вам ${age} лет`);
  if (age >= 18) return;
  console.log('Школота!');
  console.log(`Потерпи еще ${18 - age} лет до совершеннолетия`);
}

checkAge(10); // Все сообщения будут выведены
console.log('');

checkAge(20) // Функция перестанет выполняться после первого сообщения