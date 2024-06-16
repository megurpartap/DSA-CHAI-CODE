class Stack {
  constructor() {
    this.stack = [];
  }

  add(data) {
    this.stack.push(data);
    return;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    }
    this.stack.pop();
    return;
  }

  getTop() {
    return this.stack[0];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.size(); i++) {
      str = str + this.stack[i] + " ";
    }
    return str;
  }
}

// usage
const ourStack = new Stack();
ourStack.add(1);
ourStack.add(2);
ourStack.add(3);
console.log(ourStack.printStack());
ourStack.pop();
console.log(ourStack.printStack());
console.log(ourStack.getTop());
console.log(ourStack.isEmpty());
console.log(ourStack.size());
ourStack.pop();
ourStack.pop();
ourStack.pop();
console.log(ourStack.isEmpty());
