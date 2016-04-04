
const SEPARATOR = /,|\n/;

module.exports = function add (input) {

  // Return 0 for an empty string

  if (!input || input === '') {
    return 0;
  }

  // Split & parse

  var numbers = input
    .split(SEPARATOR)
    .map(n => {
      return parseInt(n);
    });

  // Sum (reduce)

  return numbers.reduce((p, n) => {
    return p + n;
  });

};
