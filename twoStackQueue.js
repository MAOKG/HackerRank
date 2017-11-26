function processData(input) {
  //Enter your code here
  class Stack {
    constructor(capacity) {
      this._capacity = capacity || Infinity;
      this._storage = {};
      this._count = 0;
    }

    push(value) {
      if (this._count < this._capacity) {
        this._storage[this._count++] = value;
        return this._count;
      }
      return 'Max capacity already reached. Remove element before adding a new one.';
    }

    pop() {
      if (this._count === 0) {
        return 'No element inside the stack. Add element before poping.';
      }
      let value = this._storage[--this._count];
      delete this._storage[this._count];
      if (this._count < 0) {
        this._count = 0;
      }
      return value;
    }
    peak() {
      if (this._count === 0) {
        return 'No element inside the stack.';
      }
      return this._storage[this._count - 1];
    }
    count() {
      return this._count;
    }
  }

  class Queue_TwoStacks {
    constructor() {
      this._stackIn = new Stack();
      this._stackOut = new Stack();
    }

    _transfer() {
      while (this._stackIn.count() > 0) {
        this._stackOut.push(this._stackIn.pop());
      }
    }
    enqueue(value) {
      this._stackIn.push(value);
    }
    dequeue() {
      if (this._stackOut.count() === 0) this._transfer();
      return this._stackOut.pop();
    }
    front() {
      if (this._stackOut.count() === 0) this._transfer();
      return this._stackOut.peak();
    }
  }

  const input_arr = input.split('\n');
  const q = input_arr[0];
  const lines = input_arr.slice(1);
  let myQueue = new Queue_TwoStacks();

  for (let i = 0; i < lines.length; i++) {
    let arr = lines[i].split(' ');
    if (arr[0] === '1' && arr.length > 1) {
      myQueue.enqueue(arr[1]);
    } else if (arr[0] === '2') {
      myQueue.dequeue();
    } else {
      console.log(myQueue.front());
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function(input) {
  _input += input;
});

process.stdin.on('end', function() {
  processData(_input);
});
