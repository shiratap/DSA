'use strict';

module.exports = class Stack {
  constructor() {
    this.top = null;
  }
  add(node) {
    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (!this.top) {
      return 'No nodes in stack';
    }
    let returnValue = this.top;
    this.top = this.top.next;
    return returnValue.value;
  }
  peek() {
    if (!this.top) {
      return 'No nodes in stack';
    }
    return this.top.value;
  }
};
