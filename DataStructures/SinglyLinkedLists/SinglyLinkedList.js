'use strict';

const Node = require('../Node/Node.js');

module.exports = class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //Add
  Add(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let iterator = this.head;
      while (iterator.next !== null) {
        iterator = iterator.next;
      }
      iterator.next = new Node(value);
      this.length++;
    }
  }

  //Contains
  Contains(value) {
    let iterator = this.head;
    for (let i = 0; i < length; i++) {
      if (iterator.value === value) {
        return true;
      }
      iterator = iterator.next;
    }
    return false;
  }

  //Occurance
  Occurances(value) {
    let iterator = this.head;
    let Occurances = 0;
    for (let i = 0; i < length; i++) {
      if (iterator.value === value) {
        Occurances++;
      }
      iterator = iterator.next;
    }
    return Occurances;
  }

  //Size
  Size() {
    return this.length;
  }
};
