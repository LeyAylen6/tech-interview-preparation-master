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
    this.top = null; // THIS.TOP = THIS.top
  }
  
  push(value) {
    const current = this.top;
    this.top = new Node(value);
    this.top.next = current;

    if(!current) this.top.min = value;

    else if (value < current.min) this.top.min = value;

    else this.top.min = current.min
  }

  pop() {
    const popped = this.top;
    this.top = this.top.next;
    return popped.value;
  }

  min() {
    return this.top.min;

    // ? Usando bucle while => No hace falta crear la prop
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
