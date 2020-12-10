const getPermutations = (arr) => {
  const output = [];

  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };
  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }
    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }

    generate(n - 1, heapArr);
  };

  generate(arr.length, arr.slice());

  return output;
};

//console.log(getPermutations([1, 2, 3, 4, 5]));

//console.log(permute([1, 5, 7, 11, 14]));

//remover itens duplicados
var numbers = [1, 1, 7, 11, 14];
let uniqueNames = numbers.filter(
  (item, pos, self) => self.indexOf(item) == pos
);

//console.log(uniqueNames);

const gameNumbersSorted = [1, 3, 10, 11, 14, 17, 18, 19, 20, 21, 23, 25];
const LotteryNumbers = [1, 3, 10, 11, 14];
let pickedNumbers = 10;
const selectedGameNumbers = [];

var permute = function (nums, set = [], answers = []) {
  if (!nums.length) answers.push([...set]);

  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((n, index) => index !== i);
    set.push(nums[i]);
    permute(newNums, set, answers);
    set.pop();
  }
  return answers;
};

console.table(permute(LotteryNumbers));

function começar() {
  let RandomizedArray = [];
  const moreGamesArray = (number) => {
    if (number) {
      RandomizedArray = gameNumbersSorted.sort(() => {
        return 0.5 - Math.random();
      });
    }
    const item = RandomizedArray.slice(gameNumbersSorted, number).sort(
      (a, b) => a - b
    );

    const index = selectedGameNumbers.indexOf(item);
    if (index > -1) {
      selectedGameNumbers.splice(index, 1);
      console.table(selectedGameNumbers);
    } else {
      selectedGameNumbers.push(...selectedGameNumbers, item);
    }
  };
  moreGamesArray(4);
}

function recursivo(count) {
  let i = 0;
  if (count) {
    do {
      começar();
      i++;
    } while (i < count);
  }
}

recursivo(5);

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}
//Usage
//console.log(removeItemOnce([2, 5, 9, 1, 5, 8, 5], 5));
//console.log(removeItemAll([2, 5, 9, 1, 5, 8, 5], 5));

const array = [2, 5, 9];

//console.log(array);

const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}

// array = [2, 9]
//console.log(array);
