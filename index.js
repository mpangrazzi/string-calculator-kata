
'use strict';

/**
 * Module dependencies
 */

const debug = require('debug')('sc:add');
const stringToNumbers = require('./lib/string-to-numbers');


module.exports = function add (input) {

  // Return 0 for an empty string

  if (!input || input === '') {
    return 0;
  }

  // Parse input

  let numbers = stringToNumbers(input);

  // Check for negative numbers

  numbers.forEach(n => {
    if (n < 0) throw new Error('negatives not allowed');
  });

  // Ignore numbers > 1000

  numbers = numbers.filter(n => {
    return n <= 1000;
  });

  // Sum (reduce)

  return numbers.reduce((p, n) => {
    return p + n;
  });

};
