'use strict';

module.exports = class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.RightChild = null;
    this.LeftChild = null;
    this.previous = null;
  }
};
