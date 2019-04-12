function bigFinder(arr) {
  return arr
    .filter(n => n > 5)
    .map(n => `Wow, ${n} is big!`);
}

module.exports = { bigFinder };
