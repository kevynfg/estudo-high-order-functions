const arr = [];
while (arr.length <= 6) {
  const random = Math.floor(Math.random() * 15) + 1;
  if (arr.indexOf(random) === -1) arr.push(random);
}
