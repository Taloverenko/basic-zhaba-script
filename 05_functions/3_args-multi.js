// Функция с двумя аргументами
// Второй аргумент имеет значение по умолчанию 
function findCard(cards, wantedCard = 'Туз') {
  console.log('Ищем в колоде карту ' + wantedCard);

  let found = false;

  for (let card of cards) {
    console.log(`Из колоды вытянута карта ${card}`);
    if (card === wantedCard) {
      found = true;
      break;
    }
  }

  console.log(found ? 
    `Мы нашли карту ${wantedCard}!` :
    `В колоде нет карты ${wantedCard}:(`
  );
}

let myCards = ['2', 'Король', 'Туз', '5', '6', 'Король'];

findCard(myCards); // Ищем туза в переданной колоде карт
console.log('');
findCard(myCards, '6') // Ищем шестерку в переданной колоде карт