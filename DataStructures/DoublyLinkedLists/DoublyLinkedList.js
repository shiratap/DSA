'use strict';

module.exports = class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  add(node) {
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }
};
