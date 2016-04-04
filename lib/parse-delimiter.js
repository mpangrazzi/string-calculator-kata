
'use strict';

/**
 * Module dependencies
 */

const debug = require('debug')('sc:parse-delimiter');


/**
 * Extract an optional extra delimiter from input string
 * E.g.: for '//!\n1;2!3,1', '!' is the extra delimiter
 *
 * @param  {string} input
 * @return {string|null}
 */

module.exports = function parseDelimiter (input) {

  var part = input.split('\n');
  var delimiter = null;

  if (part[0] && ~part[0].indexOf('//')) {
    delimiter = part[0].replace('//', '');
    debug('Found custom delimiter', delimiter);
  }

  return delimiter;

};
