// Функция с двумя аргументами
// Второй аргумент имеет значение по умолчанию 
function findCardIndex(cards, wantedCard = 'Туз') {
  console.log('Ищем в колоде карту ' + wantedCard);

  for (let index in cards) {
    let card = cards[index];
    console.log(`Из колоды вытянута карта ${card}`);
    if (card === wantedCard) {
      console.log(`Мы нашли карту ${wantedCard}!`);
      return index;
    }
  }
  
  console.log(`В колоде нет карты ${wantedCard}:(`);

  return -1;
}

let myCards = ['2', 'Король', 'Туз', '5', '6', 'Король'];

let aceIndex = findCardIndex(myCards); // Возвращаем индекс туза
let jackIndex = findCardIndex(myCards, 'Валет'); // Возвращаем индекс вальта

console.log('');
console.log(+aceIndex); 
console.log('');
console.log(+jackIndex);