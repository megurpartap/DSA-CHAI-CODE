class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
    return;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    }
    this.queue.shift();
    return;
  }

  getTop() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.size(); i++) {
      str = str + this.queue[i] + " ";
    }
    return str;
  }
}

// usage
const ourQueue = new Queue();
ourQueue.enqueue(1);
ourQueue.enqueue(2);
ourQueue.enqueue(3);
console.log(ourQueue.printQueue());
ourQueue.dequeue();
console.log(ourQueue.printQueue());
console.log(ourQueue.getTop());
console.log(ourQueue.isEmpty());
console.log(ourQueue.size());
ourQueue.dequeue();
ourQueue.dequeue();
ourQueue.dequeue();
console.log(ourQueue.isEmpty());
