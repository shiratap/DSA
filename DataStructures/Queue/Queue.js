'use strict';

module.exports = class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(node) {
    if (!this.front) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = this.back.next;
    }
  }
  dequeue() {
    if (!this.front) {
      return 'No nodes in Queue object';
    } else if (!this.front.next) {
      let returnValue = this.front;
      this.front = null;
      this.back = null;
      return returnValue;
    } else {
      let returnValue = this.front;
      this.front = this.front.next;
      return returnValue;
    }
  }
};
