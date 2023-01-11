let cards = ['2', 'король', 'туз', '5', '6', 'король', 'дама']; // колода
let hands = [];

for (let card of cards) {
  //выполняем только для нечетного индекса
  if (card !== 'король' && card !== 'туз') continue;
  hands.push(card);
  console.log('карта ' + card + ' добавлена в руку');
}

console.log('карты в руке ', hands);
