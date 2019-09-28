'use strict';

const Node = require('../Node.js');

describe('Node unit testing', () => {
  const TestNode = new Node(1);

  it('Test node should exist', () => {
    expect(TestNode).toBeTruthy();
  });
  it('Test node should have a value of 1 if given 1 in the constructor', () => {
    expect(TestNode.value).toEqual(1);
  });
  it('Should have a next value of null when instantiated', () => {
    expect(TestNode.next).toBeNull();
  });
});
