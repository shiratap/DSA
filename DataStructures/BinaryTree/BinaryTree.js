'use strict';

module.exports = class BinaryTree {
  constructor() {
    this.root = null;
  }
  add(node) {
    if (this.root === null) {
      this.root = node;
      return;
    }
    let curr = this.root;
    while (!(curr && curr.value)) {
      if (curr.value < node.value) {
        curr = curr.rightChild;
      } else if (curr.value > node.value) {
        curr = curr.leftChild;
      } else {
        curr = null;
      }
    }
    curr = node;
  }
  // find(value) {
  //   if (!this.root) {
  //     return this.root;
  //   }
  //   let curr = this.root;
  //   while()
  // }
};
