function fiboloop(num) {
  let a = 1;
  let b = 0;
  let temp = 0;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    console.log(b);
    num--;
  }
}

console.log(fiboloop(5));
