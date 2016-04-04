
/**
 * Module dependencies
 */

const debug = require('debug')('add');
const DEFAULT_DELIMITERS = [',', '\n'];


module.exports = function add (input) {

  // Return 0 for an empty string

  if (!input || input === '') {
    return 0;
  }

  // Parse input

  var numbers = parse(input);

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


/**
 * Parse an input string an return an array of Numbers
 *
 * @param  {string} input
 * @return {Array}
 */

function parse (input) {

  // check for an extra delimiter

  var extraDelimiter = getExtraDelimiter(input);

  // anlayzing string and build delimiters regexp

  var delimiters = DEFAULT_DELIMITERS;

  if (extraDelimiter) {
    debug('detected an extra delimiter', extraDelimiter);

    input = input.substring(3).trim();
    debug('cleaning input from extra delimiters syntax', input);

    delimiters.push(extraDelimiter);
  }

  debug('using delimiters', delimiters);

  var DELIMITERS_REGEXP = new RegExp(delimiters.join('|'), 'g');

  return input
    .split(DELIMITERS_REGEXP)
    .map(n => {
      return parseInt(n);
    });

}


/**
 * Extract an optional extra delimiter from input string
 * E.g.: for '//!\n1;2!3,1', '!' is the extra delimiter
 *
 * @param  {string} input
 * @return {string|null}
 */

function getExtraDelimiter (input) {

  var part = input.split('\n');
  var delimiter = null;

  if (part[0] && ~part[0].indexOf('//')) {
    delimiter = part[0].replace('//', '');
  }

  return delimiter;

}
