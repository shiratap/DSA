'use strict';
const Stack = require('../Stack.js');
const Node = require('../../Node/Node.js');

describe('Stack Class Tests', () => {
  const TestStack = new Stack();
  it('Should be able to create an empty Stack', () => {
    expect(TestStack).toBeTruthy();
  });
  it('Created Test Queue should have properties front and back', () => {
    expect(TestStack.top).toEqual(null);
  });
  it('Add functionality', () => {
    //One node enqueued
    const testNode = new Node(5);
    TestStack.add(testNode);
    expect(TestStack.top).toEqual(testNode);

    //Multiple nodes enqueued
    const testNode2 = new Node(7);
    TestStack.add(testNode2);
    expect(TestStack.top).toEqual(testNode2);
  });
  it('Pop/peek functionality', () => {
    expect(TestStack.peek()).toEqual(TestStack.pop());
    expect(TestStack.peek()).toEqual(TestStack.pop());
    expect(TestStack.peek()).toEqual(TestStack.pop());
  });
});
