let computer = {
  price: 150000,
  usbPortCount: 8,
  chipset: 'AMD X570',
  socket: 'AM4',
  coreCount: 8,
  cpuManufacturer: 'AMD',
  videocardModel: 'NVidia GeForce GTX 1650 super',
  videoMemory: 4096,
  ramType: 'DDR4',
  ramVolume: 16384,
  remFrequency: 3200,
};
// Функция Object. возвращает списки в виде массива
console.log( Object.keys(computer) ); // Список имён свойств объекта
console.log( Object.values(computer) ); // Список значений свойств объекта
console.log( Object.entries(computer) ); // Список и того и другого