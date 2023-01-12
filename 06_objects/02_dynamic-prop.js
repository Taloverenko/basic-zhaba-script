function printObjectProperty(obj, propName) {
  console.log(obj[propName]);
}

let me = {
  name: 'Stepan',
  surname: 'Taloverenko',
  middleName: 'Pavlovich',
  birthDate: { year: 1989, month: 5, day: 18 },
  occupation: 'web developer',
  married: true,
}

printObjectProperty(me, 'name'); // Stepan
printObjectProperty(me, 'middleName') // Pavlovich