process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0;

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split('\n');
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  var t = parseInt(readLine());
  let hash = { '(': ')', '{': '}', '[': ']' };
  // Stack
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
    count() {
      return this._count;
    }
  }

  function isBalanced(expression) {
    let arr = expression.split('');
    if (arr.length % 2 !== 0) {
      return false;
    }
    let stack = new Stack();
    for (let i = 0; i < arr.length; i++) {
      if (hash[arr[i]] === undefined) {
        if (hash[stack.pop()] !== arr[i]) {
          return false;
        }
      } else {
        stack.push(arr[i]);
      }
    }

    if (stack.count() !== 0) {
      return false;
    }

    return true;
  }
  for (var a0 = 0; a0 < t; a0++) {
    var expression = readLine();
    if (isBalanced(expression)) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }
}
