'use strict';

module.exports = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let y = 0; y < arr.length - 1; y++) {
      if (arr[y] > arr[y + 1]) {
        let temp = arr[y];
        arr[y] = arr[y + 1];
        arr[y + 1] = temp;
      }
    }
  }
  return arr;
};
