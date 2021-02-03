function generateArray(num, arr) {
  for (let i = 0; i < num; i++) {
    // if (i % 2 === 1) {
    //   arr.push(i);
    // }
    arr.push(i);
  }
}

const binary = (val, arr) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    console.log('tries');
    const middle = min + Math.floor((max - min) / 2);
    if (val === arr[middle]) {
      return middle;
    }
    if (val < arr[middle]) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }
  return -1;
};

//const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayNumbers = [];
generateArray(29, arrayNumbers);
console.log(arrayNumbers);
console.log(`O índice do número ${14} é: `, binary(14, arrayNumbers));
