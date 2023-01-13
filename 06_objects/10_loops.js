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

let keys = Object.keys(computer);
let values = Object.values(computer);
let entries = Object.entries(computer);

console.log('\nVALUES:\n');

for (let value of values) {
  console.log(value);
};

console.log('\n\nKEYS:\n');

for (let key of keys) {
  console.log(`${key}: ${computer[key]}`);
};

console.log('\n\nENTRIES:\n');

for (let entry of entries) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

// Такая же более читабельная запись 

console.log('\n\nENTRIES WITH DESTRUCTURING:\n');

for (let [key, value] of entries) {
  console.log(`${key}: ${value}`);
}