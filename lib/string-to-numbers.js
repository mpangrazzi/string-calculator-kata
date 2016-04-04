
'use strict';

/**
 * Module dependencies
 */

const debug = require('debug')('sc:string-to-numbers');
const parseDelimiter = require('./parse-delimiter');

const DEFAULT_DELIMITERS = [',', '\n'];


/**
 * Parse an input string an return an array of Numbers
 *
 * @param  {string} input
 * @return {Array}
 */

module.exports = function stringToNumbers (input) {

  // check for an extra delimiter

  let extraDelimiter = parseDelimiter(input);

  // anlayzing input and build delimiters regexp

  let delimiters = DEFAULT_DELIMITERS;

  if (extraDelimiter) {

    // add new delimiter

    delimiters.push(extraDelimiter);

    // "clean" input string

    input = input.substring(3).trim();
    debug('cleaning input from extra delimiters syntax', input);

  }

  debug('using delimiters', delimiters);

  let DELIMITERS_REGEXP = new RegExp(delimiters.join('|'), 'g');
  debug('delimiters regexp', DELIMITERS_REGEXP);

  return input
    .split(DELIMITERS_REGEXP)
    .map(n => {
      return parseInt(n, 10);
    });

};
