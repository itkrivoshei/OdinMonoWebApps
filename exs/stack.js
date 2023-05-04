class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty.');
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = Stack;
