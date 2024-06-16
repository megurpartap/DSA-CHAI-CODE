class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data, this.head, null);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.head.prev = newNode;
    this.head = newNode;
  }
};

DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, this.tail);
  if (!this.tail) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

DoublyLinkedList.prototype.insertAfter = function (data, prevNode) {
  const newNode = new Node(data, prevNode.next, prevNode);

  if (prevNode.next !== null) {
    prevNode.next.prev = newNode;
  }
  prevNode.next = newNode;
  if (newNode.next === null) {
    this.tail = newNode;
  }
};

DoublyLinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    console.log("linked list is empty");
    return;
  }
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    return;
  }
  this.head = this.head.next;
  this.head.prev = null;
};

DoublyLinkedList.prototype.deleteLastNode = function () {
  if (!this.tail) {
    return;
  }
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    return;
  }
  this.tail = this.tail.prev;
  this.tail.next = null;
};

DoublyLinkedList.prototype.reverse = function () {
  let temp;
  let current = this.head;
  while (current !== null) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    current = current.prev;
  }
  temp = this.head;
  this.head = this.tail;
  this.tail = temp;
  return;
};

DoublyLinkedList.prototype.traverseList = function () {
  let current = this.head;
  const listValues = [];
  while (current) {
    listValues.push(current.data);
    current = current.next;
  }
  return listValues.join(" -> ");
};

const myLinkedList = new DoublyLinkedList();
myLinkedList.insertAtBeginning(1);
myLinkedList.insertAtBeginning(2);
myLinkedList.insertAtEnd(3);
myLinkedList.insertAtEnd(4);
console.log(myLinkedList.traverseList());
myLinkedList.deleteFirstNode();
console.log(myLinkedList.traverseList());
myLinkedList.deleteLastNode();
console.log(myLinkedList.traverseList());
myLinkedList.insertAtEnd(2);
myLinkedList.insertAtEnd(3);
myLinkedList.insertAtEnd(4);
console.log(myLinkedList.traverseList());
myLinkedList.reverse();
console.log(myLinkedList.traverseList());
