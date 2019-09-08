'use strict';
'use strict';

const Node = require('../TreeNode.js');

describe('Node unit testing', () => {
  const TreeNode = new Node(1);

  it('Tree node should exist', () => {
    expect(TreeNode).toBeTruthy();
  });
  it('Tree node should have a value of 1 if given 1 in the constructor', () => {
    expect(TreeNode.value).toEqual(1);
  });
  it('Should have a Left Child value of null when instantiated', () => {
    expect(TreeNode.leftChild).toBeNull();
  });
  it('Should have a Right Child value of null when instantiated', () => {
    expect(TreeNode.rightChild).toBeNull();
  });
});
