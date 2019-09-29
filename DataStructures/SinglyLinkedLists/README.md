# Singly Linked List Class

This is the singly linked list data structure. Below describes the functionality
of the class

```js
const singlyLinkedList = new SLL();
```

---

# Methods

```js
singlyLinkedList.Add(value);
```

- Adds a node to the end of the singlyLinkedList chain

#### Algorithm:

- Finds the end of the chain with a while loop
- Reassigns the last node in the chain to an instantiated Node with value

#### Time/Space Complexity

- Time: O(n)
  - All cases, Needs to reach the end of the chain in order to add the node
- Space: O(1)
  - Is adding a singular node and reassigning a iterator

---

```js
singlyLinkedList.Contains(value);
```

- Returns a boolean representing if there is an occurance of that value passed
  in.
- Defaults to `false`

#### Algorithm:

- Iterates through each node in singlyLinkedList
- If the current node value in the loop is equal to the value, returns true
- If no node through that loop contained the same value as the input, returns
  false

#### Time/Space Complexity

- Time: O(n)

  - Best case, it needs to hit only the first node of the list
  - Average case, it needs to hit somewhere in the middle of the list
  - Worst case, the last node contains the value, or no nodes contain the value

- Space: O(1)
  - There's an iterator variable

---

```js
singlyLinkedList.Occurances(value);
```

- Returns a numeric type representing the occurances of that value occuring in
  the singlyLinkedList chain
- Will default return `0`

#### Algorithm:

- Instantiates a counter to `0`
- Iterates through each node in singlyLinkedList
- If the current node value in the loop is equal to the value, adds to the
  counter
- Returns the counter variable

#### Time/Space Complexity

- Time: O(n)

  - All cases, Needs to hit every node

- Space: 0(1)
  - One iterator variable, one counter variable

---

```js
singlyLinkedList.Size();
```

- Returns the size (number of nodes) in the Linked List
- If singlyLinkedList has nothing in it, returns `0`

### Algorithm

- returns the length property of the singlyLinkedList

### Time/Space Complexity

- Time: O(1)
  - All cases, Fast lookup since the method only references the object's length
    property
- Space: O(1)
  - No space taken

---

# Future implementations

- Deletion methods
- Insertions before and after specified nodes

# Code

```js
'use strict';
const Node = require('../Node/Node.js');

module.exports = class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

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

  Size() {
    return this.length;
  }
};
```
