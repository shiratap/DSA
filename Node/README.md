# Node

A basic Node. It has the given properties:

#### const node = new Node(value)

- node.value
  - Holds the value. Can be of any type
  - Instantiated as the argument passed into constructor
- node.next
  - Pointer to the next node, specifically for Singly Linked Lists, Stacks, and
    Queues
  - Instantiated as null
- node.RightChild
  - Pointer to the RightChild, specifically for Binary Trees
  - Instantiated as null
- node.LeftChild
  - Pointer to the LeftChild, specifically for Binary Trees
  - Instantiated as null
- node.previous
  - Pointer to the previous node, specifically for Doubly Linked Lists
  - Instantiated as null

Code:

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.RightChild = null;
    this.LeftChild = null;
    this.previous = null;
  }
}
```

### Improvements for the future

- Make all properties private
- create getters for each property
- create setters for each property
