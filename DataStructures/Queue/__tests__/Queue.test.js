'use strict';
const Node = require('../../Node/Node.js');
const Queue = require('../Queue.js');

describe('Queue Class tests', () => {
  const TestQueue = new Queue();
  it('Should be able to create an empty Queue', () => {
    expect(TestQueue).toBeTruthy();
  });
  it('Created Test Queue should have properties front and back', () => {
    expect(TestQueue.front).toEqual(null);
    expect(TestQueue.back).toEqual(null);
  });
  it('Enqueue functionality', () => {
    //One node enqueued
    const testNode = new Node(5);
    TestQueue.enqueue(testNode);
    expect(TestQueue.front).toEqual(testNode);

    //Multiple nodes enqueued
    const testNode2 = new Node(7);
    TestQueue.enqueue(testNode2);
    expect(TestQueue.back).toEqual(testNode2);
  });
  it('Dequeue functionality', () => {
    expect(TestQueue.dequeue().value).toEqual(5);
    expect(TestQueue.dequeue().value).toEqual(7);
    expect(TestQueue.front).toBeNull();
    expect(TestQueue.back).toBeNull();
    expect(TestQueue.dequeue()).toEqual('No nodes in Queue object');
  });
});
