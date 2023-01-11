let fruit = 'яблоко';

switch (fruit) {
  case 'яблоко':
    console.log('перед нами яблоко');
    break;
  case 'банан':
    console.log('перед нами банан');
    break;
  case 'арбуз':
  case 'вишня':
  case 'клубника':
    console.log('перед нами ягода');
    break;
  default:
    console.log('Не знаю такого фрукта');
    break;
}