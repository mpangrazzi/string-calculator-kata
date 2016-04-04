
const MAX_INPUT = 2;
const SEPARATOR = /,/;

module.exports = function sc (input) {

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

  if (numbers.length > MAX_INPUT) {
    throw new Error(`Maximum input values exceeded (${MAX_INPUT})`);
  }

  // Sum (reduce)

  return numbers.reduce((p, n) => {
    return p + n;
  });

};
