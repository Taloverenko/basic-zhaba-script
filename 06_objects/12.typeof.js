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