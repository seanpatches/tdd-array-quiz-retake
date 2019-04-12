const array = [1, 3, 1, 5, 7, 2, 10];

function bigFinder(arr) {
  return arr
    .filter(n => n > 5)
    .map(n => `Wow, ${n} is big!`);
}

console.log(bigFinder(array));

module.exports = { bigFinder };
