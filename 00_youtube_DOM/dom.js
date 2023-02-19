const div = document.createElement('div'); // create div
div.classList.add('wrapper'); // add "wrapper" class to div
const body = document.body;
body.appendChild(div); // add div into body
header = document.createElement('h1'); // create title
header.textContent = 'header.textContent = ";'; // added text of title
div.insertAdjacentElement('beforebegin', header); // add H1 before div
const ul = `
  <ul>
    <li>zero</li>
    <li>one</li>
    <li>two</li>
  </ul>
`;          // create markup into ul
div.innerHTML = ul; // add ul into div

const img = document.createElement('img'); // create img
img.src = 'https://www.freepnglogos.com/uploads/superman-logo-clipart-png-12.png';
img.width = 420;
img.classList.add('super');
img.alt = 'Super Man';
div.appendChild(img); // add img into div

const elemHTML = `
  <div class = 'pDiv'>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
`
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML); // add elemHTML before ul

const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text'); // add 'text' class for paragraph 2
pDiv.firstElementChild.remove(); // delete paragraph 1 ( pDiv.chilren[0] )

const generateAutoCard = (brand, color, year, transmission, owners) => {
  const curDate = new Date();
  const curYear = curDate.getFullYear();
  return `
    <div class="autocard">
      <h2>${brand.toUpperCase()} ${year}</h2>
      <p>Age: ${curYear - year} years.
      <p>Transmission: ${transmission}</p>
      <p>Number of owners: ${owners}</p>
      <p>Color: ${color}</p>
      <button type='button' class='btn'>Delete card</button>
    </div>
  `;
}

const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');

const carList = [
  {brand: 'Tesla', year: 2015, color: 'red', transmission: 'auto', owners: '1'},
  {brand: 'Lexus', year: 2016, color: 'silver', transmission: 'auto', owners: '2'},
  {brand: 'Nissan', year: 2012, color: 'black', transmission: 'manual', owners: '3'},
]

const carsHTML = carList.map(car => {
  return generateAutoCard(car.brand, car.color, car.year, car.transmission, car.owners)
}).join('');

carsDiv.innerHTML = carsHTML;
div.insertAdjacentElement('beforebegin', carsDiv);

const buttons = document.querySelectorAll('.btn');
function handleClick(e) {
  const currentButton = e.currentTarget;
  currentButton.closest('.autocard').remove();
}
buttons.forEach(button => {
  button.addEventListener('click', handleClick)
})