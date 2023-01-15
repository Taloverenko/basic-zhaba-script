function getStringValue(unknown) {
  if (typeof unknown === 'string') {
    return unknown;
  }
  if (typeof unknown === 'function') {
    return unknown();
  }
  if (typeof unknown === 'object') {
    return unknown.toString();
  }
  return '';
}

console.log(getStringValue('Just string'));
console.log(getStringValue(function() {
  return new Date().getFullYear();
}));
console.log(getStringValue([1, 2, 3]));
console.log(getStringValue({}));
console.log(getStringValue(true));