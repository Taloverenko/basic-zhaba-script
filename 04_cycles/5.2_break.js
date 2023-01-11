let cards = ['2', 'король', 'туз', '5',  'дама', '6', 'король']; // колода
console.log('Ищем даму в колоде...');

let found = false;

for (let card of cards) {
  console.log(`Из колоды вытянута карта ${card}`);
  if (card === 'дама') {
    found = true;
    break;
  }
}

console.log(found ? 'Мы нашли даму!' : 'В колоде нет дам :(');