'use strict';

module.exports = class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  Add(node) {
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
  Contains(node) {
    let curr = this.head;
    while (curr.next) {
      if (curr.value === node.value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }
};
