const range = (from, to) => parseInt(from + Math.random() * to);
const randomChar = () => String.fromCharCode(range(65, 123));
const randomString = (from, to) => {
  const n = range(from, to);
  return new Array(n).fill(null).map(randomChar);
};

console.log(randomString(3, 40));
