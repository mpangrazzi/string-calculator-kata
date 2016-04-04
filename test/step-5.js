
/**
 * Test dependencies
 */

import test from 'ava';
import add from '..';


test('negatives not allowed', t => {

  t.throws(() => {
    let result = add('1,4,-1');
  }, 'negatives not allowed');

});

test('negatives not allowed', t => {

  t.throws(() => {
    let result = add('//;\n1,4;-1');
  }, 'negatives not allowed');

});
