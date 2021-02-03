const ev = require('events');

// class MyEmitter extends EventEmitter {}
let ImmediateTime = new Date();
let consoleLog = new Date();

const myEmitter = new ev();
myEmitter.on('event', (a, b) => {
  console.log(a, b);
  setImmediate(() => {
    console.log('time', ImmediateTime);
    console.log('this happens asynchronously');
  });
});
myEmitter.emit('event', 'a', 'b');

function Fibo(num) {
  let a = 1;
  let b = 0;
  let temp = 0;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    console.log(temp);
    num--;
  }
}

myEmitter.on('Oi', Fibo);

myEmitter.emit('Oi');
