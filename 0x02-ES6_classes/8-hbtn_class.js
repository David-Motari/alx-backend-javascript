export default class HolbertonClass {
  constructor(size = 0, location = '') {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = size;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = location;
  }

  [Symbol.toPrimitive](valType) {
    if (valType === 'string') {
      return `${this._location}`;
    } if (valType === 'number') {
      return `${this._size}`;
    }
    return `${this._location}_`;
  }
}
