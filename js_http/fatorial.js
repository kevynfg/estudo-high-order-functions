function fatorial(num) {
  if (num === 0 || num === 1) return 1;
  let result = num * fatorial(num - 1);
  console.log(result);
  return result;
}

console.log(fatorial(10));
