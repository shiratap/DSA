'use strict';

module.exports = arr => {
  const sorted = [];
  arr.forEach(entry => {
    if (sorted.length === 0) {
      sorted.push(entry);
    } else {
      if (sorted[sorted.length - 1] < entry) {
        sorted.push(entry);
      } else {
        for (let i = 0; i < sorted.length; ++i) {
          if (entry <= sorted[i]) {
            sorted.splice(i, 0, entry);
            break;
          }
        }
      }
    }
  });
  return sorted;
};
