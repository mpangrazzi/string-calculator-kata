
/**
 * Test dependencies
 */

import test from 'ava';
import add from '..';


test('result equals 6', t => {
  let result = add('1\n2,3');
  t.is(result, 6);
});

test('result equals 11', t => {
  let result = add('1\n2,3\n5');
  t.is(result, 11);
});
