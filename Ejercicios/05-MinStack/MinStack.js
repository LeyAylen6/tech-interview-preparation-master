// push(value) : añadir el elemento, value, al stack.
// pop() : sacar un elemento del stack.
// min() : obtener el elemento con el valor mínimo.
// peek(): obtener el elemento que está el en top del Stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.min = Infinity;
  }
}

class MinStack {
  constructor() {
    this.head = null; // THIS.TOP = THIS.HEAD
  }
  
  push(value) {
    const current = this.head;
    this.head = new Node(value);
    this.head.next = current;

    if(!current) this.head.min = value;

    else if (value < current.min) this.head.min = value;

    else this.head.min = current.min
  }

  pop() {
    const popped = this.head;
    this.head = this.head.next;
    return popped.value;
  }

  min() {
    return this.top.min;

    // ? Usando bucle while => No hace falta crear la prop min.
    // let min = Infinity;

    // while(current) {
    //   if (current.value < min) min = current.value; // Pisa cada valor que haya en min si value es menor.
    //   current = current.next;
    // }
    // return min;
  }

  peek() {
    return this.top.value;
  }
}

const newStack = new MinStack();
newStack.push(1)
newStack.push(5)
newStack.push(7)
newStack.push(2)

// console.log(MinStack)

module.exports = {
  Node,
  MinStack
}
