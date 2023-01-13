let motherBoard = {
  usbPortCount: 8,
  chipset: 'AMD X570',
  socket: 'AM3/AM4',
};

let CPU = {
  coreCount: 8,
  cpuManufacturer: 'AMD',
  socket: 'AM4',
};

let videocard = {
  videocardModel: 'NVidia GeForce GTX 1650 super',
  videoMemory: 4096,
};

let RAM = {
  ramType: 'DDR4',
  ramVolume: 16384,
  remFrequency: 3200,
};

let computer = {
  price: 100000,
  ...motherBoard,
  ...CPU, // Свойство socket из объекта motherBoard будет заменено на такое же из CPU
  ...videocard,
  ...RAM,
};

let computerWithAssign = Object.assign(
  {
    price: 150000
  },
  motherBoard, CPU, videocard, RAM
);

console.log(computer);
console.log('');
console.log(computerWithAssign);