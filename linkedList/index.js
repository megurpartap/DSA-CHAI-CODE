class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (this.head == null) {
    this.head = newNode;
    return;
  } else {
    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    last.next = newNode;
    return;
  }
};

LinkedList.prototype.insertAtGivenNode = function (data, prevNode) {
  if (!prevNode) {
    return;
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
};

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return;
  }
  if (!this.head.next) {
    this.head = null;
  }

  let secondLastNode = this.head;
  while (secondLastNode.next.next) {
    secondLastNode = secondLastNode.next;
  }
  secondLastNode.next = null;
};

LinkedList.prototype.deleteNodeAtKey = function (key) {
  if (!this.head) {
    return;
  }
  if (this.head.data === key) {
    this.head = this.head.next;
  }

  let current = this.head;
  while (current.next != null) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
  console.log("Node with Key not found");
};

LinkedList.prototype.SearchKey = function (key) {
  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    }
    current = current.next;
  }
  return false;
};

LinkedList.prototype.traverseList = function () {
  let current = this.head;
  const listValues = [];
  while (current) {
    listValues.push(current.data);
    current = current.next;
  }
  return listValues.join(" -> ");
};

LinkedList.prototype.reverse = function () {
  let current = this.head;
  prev = null;
  next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev;
};

const myLinkedList = new LinkedList();
myLinkedList.insertAtBeginning(1);
myLinkedList.insertAtEnd(2);
myLinkedList.insertAtEnd(3);
myLinkedList.insertAtEnd(4);
console.log(myLinkedList.traverseList());
myLinkedList.deleteFirstNode();
console.log(myLinkedList.traverseList());
myLinkedList.deleteLastNode();
console.log(myLinkedList.traverseList());
myLinkedList.deleteNodeAtKey(2);
console.log(myLinkedList.traverseList());
console.log(myLinkedList.SearchKey(2));
console.log(myLinkedList.SearchKey(3));
myLinkedList.insertAtEnd(2);
myLinkedList.insertAtEnd(3);
myLinkedList.insertAtEnd(4);
console.log(myLinkedList.traverseList());
myLinkedList.reverse();
console.log(myLinkedList.traverseList());
